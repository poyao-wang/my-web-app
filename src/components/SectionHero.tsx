import React from "react";
import { useTranslation } from "react-i18next";

const SectionHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="page-home__section-hero"
      className="section-hero"
      style={{ backgroundImage: "url(assets/bg-top.png)" }}
    >
      <h1>Poyao Wang</h1>
      <p className="p-h1">{t("sectionHero.subtitle")}</p>
    </section>
  );
};

export default SectionHero;
