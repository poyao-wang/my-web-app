import { AnimeName } from "../mainData.model";

import aboutBackEnd from "../assets/animations/about_back-end.json";
import aboutFrontEnd from "../assets/animations/about_front-end.json";
import aboutLanguage from "../assets/animations/about_language.json";
import projectTabatimer from "../assets/animations/project_tabatimer.json";
import projectPoyaoDotWang from "../assets/animations/project_poyao-dot-wang.json";
import heroBg from "../assets/animations/hero_bg.json";
import heroPoyaoWang from "../assets/animations/hero_poyao-wang.json";

const loadAnimationData = (name: AnimeName) => {
  switch (name) {
    case "about_back-end":
      return aboutBackEnd;
    case "about_front-end":
      return aboutFrontEnd;
    case "about_language":
      return aboutLanguage;
    case "project_tabatimer":
      return projectTabatimer;
    case "project_poyao-dot-wang":
      return projectPoyaoDotWang;
    case "hero_bg":
      return heroBg;
    case "hero_poyao-wang":
      return heroPoyaoWang;
  }
};

const animeFns = { loadAnimationData };

export default animeFns;
