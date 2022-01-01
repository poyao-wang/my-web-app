import React from "react";
import { useTranslation } from "react-i18next";

import * as TypeMainData from "../mainData.model";
import IconWithContainer from "./IconWithContainer";
import SvgBg from "./SvgBg";

const SectionContact: React.FC = () => {
  const { t } = useTranslation();

  const sectionContact: TypeMainData.SectionContacts = t("sectionContacts", {
    returnObjects: true,
  });

  return (
    <section id="page-home__section-contact" className="section-contact">
      <div id="contact-bg">
        <SvgBg.Btm />
      </div>
      <div className="section-contact__contents">
        <h2>{sectionContact.title}</h2>
        <p className="p-h2">{sectionContact.subtitle}</p>
        <div className="contact-items">
          {sectionContact.contactItems.map((item, index) => (
            <a key={index} href={item.href}>
              <IconWithContainer
                iconSrc={item.iconSrc}
                type={"contact"}
                text={item.text}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
