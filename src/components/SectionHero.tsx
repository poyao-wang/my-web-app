import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import lottie from "lottie-web";

import NavBar from "./NavBar";
import animeFns from "../utils/animeFns";
import SvgBg from "./SvgBg";

const SectionHero: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    lottie.loadAnimation({
      container: document.getElementById("hero_poyao-wang")!,
      animationData: animeFns.loadAnimationData("hero_poyao-wang"),
      renderer: "svg",
      loop: false,
      autoplay: true,
    });

    gsap
      .timeline()
      .from("#hero_p-h1", {
        delay: 1.1,
        duration: 1.5,
        ease: "power4.out",
        y: 20,
        opacity: 0,
      })
      .from(
        ".nav-bar .icon_logo, .nav-bar .nav-bar__translate",
        {
          duration: 1.5,
          ease: "power4.out",
          y: 20,
          opacity: 0,
        },
        "<0.2"
      )
      .from(
        ".nav-bar .item-nav",
        {
          duration: 0.75,
          ease: "power4.out",
          y: 20,
          opacity: 0,
          stagger: 0.05,
        },
        "<+=0.1"
      );

    const tlBgScroll = gsap
      .timeline()
      .set("#hero-bg", { transformOrigin: "bottom" })
      .to("#hero-bg", {
        duration: 0.5,
        scale: 1.05,
        y: 15,
      });

    ScrollTrigger.create({
      animation: tlBgScroll,
      trigger: "#page-home__section-hero",
      start: "top+=30 top",
      end: "bottom top",
      // markers: true,
      scrub: 1,
    });
  }, []);

  return (
    <section id="page-home__section-hero" className="section-hero">
      <NavBar />
      <div id="hero-bg">
        <SvgBg.Top />
      </div>
      <div className="section-hero__contents">
        <div id="hero_poyao-wang"></div>
        <p id="hero_p-h1" className="p-h1">
          {t("sectionHero.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default SectionHero;
