import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import lottie, { AnimationItem } from "lottie-web";

import NavBar from "./NavBar";
import animeFns from "../utils/animeFns";

const SectionHero: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bgAnime: AnimationItem = lottie.loadAnimation({
      container: document.getElementById("hero_bg")!,
      animationData: animeFns.loadAnimationData("hero_bg"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      initialSegment: [0, 15],
    });

    const poyaoWangAnime: AnimationItem = lottie.loadAnimation({
      container: document.getElementById("hero_poyao-wang")!,
      animationData: animeFns.loadAnimationData("hero_poyao-wang"),
      renderer: "svg",
      loop: false,
      autoplay: true,
    });

    bgAnime.addEventListener("complete", (e) => {
      bgAnime.loop = false;
      setTimeout(() => {
        bgAnime.playSegments([16, 34]);
      }, 4000);
    });

    const tl = gsap
      .timeline()
      .set("#hero_bg", { transformOrigin: "bottom" })
      .to("#hero_bg", {
        duration: 0.5,
        scale: 1.1,
        y: 30,
      });

    ScrollTrigger.create({
      animation: tl,
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
      <div id="hero_bg" />
      <div id="hero_poyao-wang"></div>
      <p className="p-h1">{t("sectionHero.subtitle")}</p>
    </section>
  );
};

export default SectionHero;
