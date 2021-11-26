import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import * as TypeMainData from "../mainData.model";
import IconWithContainer from "./IconWithContainer";

const SectionSkills: React.FC = () => {
  const { t } = useTranslation();

  const tl = useRef<gsap.core.Timeline>();

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
    opacity: 0.05,
    scale: 0.3,
  };

  const position = "-=0.43";

  useEffect(() => {
    tl.current = gsap
      .timeline({ defaults: { duration: 0.5, ease: "elastic.out(1, 0.4)" } })
      .from(containerRefMid2.current, vars)
      .from(containerRefMid1.current, vars, position)
      .from(containerRefLft1.current, vars, position)
      .from(containerRefLtr1.current, vars, position)
      .from(containerRefLft2.current, vars, position)
      .from(containerRefMid3.current, vars, position)
      .from(containerRefRht2.current, vars, position)
      .from(containerRefRtr1.current, vars, position)
      .from(containerRefRht1.current, vars, position);
  }, []);

  return (
    <section id="page-home__section-skills" className="section-skills">
      <h2>{sectionSkills.title}</h2>
      <p className="p-h2">{sectionSkills.subtitle}</p>
      <div className="skill-items">
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              animeRef={containerRefLtr1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.lefter.imgSrc}
              text={sectionSkills.skillItems.lefter.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              animeRef={containerRefLft1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.left1.imgSrc}
              text={sectionSkills.skillItems.left1.title}
            />
          }
          {
            <IconWithContainer
              animeRef={containerRefLft2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.left2.imgSrc}
              text={sectionSkills.skillItems.left2.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              animeRef={containerRefMid1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid1.imgSrc}
              text={sectionSkills.skillItems.mid1.title}
            />
          }
          {
            <IconWithContainer
              animeRef={containerRefMid2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid2.imgSrc}
              text={sectionSkills.skillItems.mid2.title}
            />
          }
          {
            <IconWithContainer
              animeRef={containerRefMid3}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.mid3.imgSrc}
              text={sectionSkills.skillItems.mid3.title}
            />
          }
        </div>
        <div className="skill-items__col">
          {
            <IconWithContainer
              animeRef={containerRefRht1}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.right1.imgSrc}
              text={sectionSkills.skillItems.right1.title}
            />
          }
          {
            <IconWithContainer
              animeRef={containerRefRht2}
              type={"skill"}
              iconSrc={sectionSkills.skillItems.right2.imgSrc}
              text={sectionSkills.skillItems.right2.title}
            />
          }
        </div>
        <div className="skill-items__col mobile-hide">
          {
            <IconWithContainer
              animeRef={containerRefRtr1}
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
