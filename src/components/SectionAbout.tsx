import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import * as TypeMainData from "../mainData.model";
import ItemAbout from "./ItemAbout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie, { AnimationItem } from "lottie-web";
import { AnimeName } from "../mainData.model";
import animeFns from "../utils/animeFns";

const SectionAbout: React.FC = () => {
  const { t } = useTranslation();

  const sectionAbout: TypeMainData.SectionAbout = t("sectionAbout", {
    returnObjects: true,
  });
  const createLottieAnime = (animeDivId: string, animeName: AnimeName) => {
    return lottie.loadAnimation({
      container: document.getElementById(animeDivId)!,
      animationData: animeFns.loadAnimationData(animeName),
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  };

  useEffect(() => {
    const animeLt = createLottieAnime(
      "about-anime-0",
      sectionAbout.aboutItems[0].iconAnimeName
    );
    const animeMi = createLottieAnime(
      "about-anime-1",
      sectionAbout.aboutItems[1].iconAnimeName
    );
    const animeRt = createLottieAnime(
      "about-anime-2",
      sectionAbout.aboutItems[2].iconAnimeName
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="page-home__section-about" className="section-about">
      <h2>{sectionAbout.title}</h2>
      <p className="p-h2">{sectionAbout.subtitle}</p>
      <div className="about-items">
        {sectionAbout.aboutItems.map((item, index) => (
          <ItemAbout
            index={index}
            key={index}
            iconAnimeName={item.iconAnimeName as TypeMainData.AnimeName}
            iconSrc={item.imgSrc}
            textH={item.titleText}
            textP={item.contentText}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionAbout;
