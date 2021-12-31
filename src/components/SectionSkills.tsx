import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as TypeMainData from "../mainData.model";
import IconWithContainer from "./IconWithContainer";

const SectionSkills: React.FC = () => {
  const { t } = useTranslation();

  const tl = useRef<gsap.core.Timeline>();

  const sectionSkillRef = useRef<HTMLDivElement>(null);
  const containerRefLft1 = useRef<HTMLDivElement>(null);
  const containerRefLft2 = useRef<HTMLDivElement>(null);
  const containerRefLtr1 = useRef<HTMLDivElement>(null);
  const containerRefMid1 = useRef<HTMLDivElement>(null);
  const containerRefMid2 = useRef<HTMLDivElement>(null);
  const containerRefMid3 = useRef<HTMLDivElement>(null);
  const containerRefRht1 = useRef<HTMLDivElement>(null);
  const containerRefRht2 = useRef<HTMLDivElement>(null);
  const containerRefRtr1 = useRef<HTMLDivElement>(null);

  const sectionSkills: TypeMainData.SectionSkills = t("sectionSkills", {
    returnObjects: true,
  });

  const vars: gsap.TweenVars = {
    opacity: 0,
    scale: 0.3,
  };

  const position = "-=0.43";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap
      .timeline({ defaults: { duration: 0.5, ease: "back.out(1.7)" } })
      .from(containerRefMid1.current, vars)
      .from(containerRefLft1.current, vars, position)
      .from(containerRefLtr1.current, vars, position)
      .from(containerRefLft2.current, vars, position)
      .from(containerRefMid3.current, vars, position)
      .from(containerRefRht2.current, vars, position)
      .from(containerRefRtr1.current, vars, position)
      .from(containerRefRht1.current, vars, position);

    ScrollTrigger.create({
      animation: tl.current,
      trigger: sectionSkillRef.current,
      start: "80% bottom",
      end: "80% 70%",
      // markers: true,
      scrub: 0.5,
      toggleActions: "play pause resume reset",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="page-home__section-skills"
      className="section-skills"
      ref={sectionSkillRef}
    >
      <h2>{sectionSkills.title}</h2>
      <p className="p-h2">{sectionSkills.subtitle}</p>
      <div className="skill-items">
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              iconContainerDivRef={containerRefLtr1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.lefter.imgSrc}
              text={sectionSkills.skillItems.lefter.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              iconContainerDivRef={containerRefLft1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.left1.imgSrc}
              text={sectionSkills.skillItems.left1.title}
            />
          }
          {
            <IconWithContainer
              iconContainerDivRef={containerRefLft2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.left2.imgSrc}
              text={sectionSkills.skillItems.left2.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              iconContainerDivRef={containerRefMid1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid1.imgSrc}
              text={sectionSkills.skillItems.mid1.title}
            />
          }
          {
            <IconWithContainer
              iconContainerDivRef={containerRefMid2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid2.imgSrc}
              text={sectionSkills.skillItems.mid2.title}
            />
          }
          {
            <IconWithContainer
              iconContainerDivRef={containerRefMid3}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid3.imgSrc}
              text={sectionSkills.skillItems.mid3.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              iconContainerDivRef={containerRefRht1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.right1.imgSrc}
              text={sectionSkills.skillItems.right1.title}
            />
          }
          {
            <IconWithContainer
              iconContainerDivRef={containerRefRht2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.right2.imgSrc}
              text={sectionSkills.skillItems.right2.title}
            />
          }
        </div>
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              iconContainerDivRef={containerRefRtr1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.righter.imgSrc}
              text={sectionSkills.skillItems.righter.title}
            />
          }
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
