import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import lottie, { AnimationItem } from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as TypeMainData from "../mainData.model";
import ItemProject from "./ItemProject";
import animeFns from "../utils/animeFns";

const SectionProjects: React.FC = () => {
  const { t } = useTranslation();

  const sectionProjects: TypeMainData.SectionProjects = t("sectionProjects", {
    returnObjects: true,
  });

  const createLottieAnime = (
    animeDivId: string,
    animeName: TypeMainData.AnimeName
  ) => {
    const lottieAnime = lottie.loadAnimation({
      container: document.getElementById(animeDivId)!,
      animationData: animeFns.loadAnimationData(animeName),
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    lottieAnime.addEventListener("complete", (e) => {
      lottieAnime.loop = true;
      lottieAnime.playSegments([150, 250], true);
    });

    return lottieAnime;
  };

  const createTimeLine = (triggerDivId: string, reversed: boolean) => {
    return gsap.timeline().from("#" + triggerDivId, {
      duration: 0.5,
      opacity: 0,
      x: reversed ? 100 : -100,
      scale: 0.7,
    });
  };

  const createScrollTrigger = (
    triggerDivId: string,
    timeline: gsap.core.Timeline,
    lottieAnime: AnimationItem
  ) => {
    ScrollTrigger.create({
      animation: timeline,
      trigger: "#" + triggerDivId,
      start: "-200 70%",
      end: "+=100 70%",
      // markers: true,
      scrub: 0.3,
      onEnter: () => {
        lottieAnime.loop = false;
        lottieAnime.playSegments([0, 25], true);
      },
    });
  };

  const createScrollTriggerPin = (
    triggerDivId: string,
    lottieAnime: AnimationItem
  ) => {
    const playMainSegment = () => {
      if (lottieAnime.firstFrame !== 25) {
        lottieAnime.loop = false;
        lottieAnime.playSegments([25, 150], true);
      }
    };

    ScrollTrigger.create({
      trigger: "#" + triggerDivId,
      start: "center center",
      end: "+=200 center",
      // markers: true,
      pin: true,
      onEnter: playMainSegment,
      onEnterBack: playMainSegment,
    });
  };

  useEffect(() => {
    const anime0 = createLottieAnime(
      "project-anime-0",
      sectionProjects.projectItems[0].iconAnimeName
    );
    const anime1 = createLottieAnime(
      "project-anime-1",
      sectionProjects.projectItems[1].iconAnimeName
    );

    const tl0 = createTimeLine("item-project-0", false);
    const tl1 = createTimeLine("item-project-1", true);

    gsap.registerPlugin(ScrollTrigger);

    createScrollTrigger("item-project-0", tl0, anime0);
    createScrollTrigger("item-project-1", tl1, anime1);

    createScrollTriggerPin("item-project-0", anime0);
    createScrollTriggerPin("item-project-1", anime1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="page-home__section-projects" className="section-projects">
      <h2>{sectionProjects.title}</h2>
      <p className="p-h2">{sectionProjects.subtitle}</p>
      <div className="project-items">
        <ItemProject
          key={0}
          index={0}
          iconSrc={sectionProjects.projectItems[0].imgSrc}
          iconBgUrl="/assets/proj-card-img-container.png"
          textH={sectionProjects.projectItems[0].title}
          textP={sectionProjects.projectItems[0].text}
          textBtn={sectionProjects.projectItems[0].btnText}
          hrefBtn={sectionProjects.projectItems[0].btnLink}
        />
        <ItemProject
          key={1}
          index={1}
          reversed={true}
          iconSrc={sectionProjects.projectItems[1].imgSrc}
          iconBgUrl="/assets/proj-card-img-container.png"
          textH={sectionProjects.projectItems[1].title}
          textP={sectionProjects.projectItems[1].text}
          textBtn={sectionProjects.projectItems[1].btnText}
          hrefBtn={sectionProjects.projectItems[1].btnLink}
        />
      </div>
    </section>
  );
};

export default SectionProjects;
