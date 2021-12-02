import { AnimeName } from "../mainData.model";

const loadAnimationData = (AnimeName: AnimeName) => {
  switch (AnimeName) {
    case "about_back-end":
      return require("../assets/animations/about_back-end.json");
    case "about_front-end":
      return require("../assets/animations/about_front-end.json");
    case "about_language":
      return require("../assets/animations/about_language.json");
    case "project_tabatimer":
      return require("../assets/animations/project_tabatimer.json");
    case "project_poyao-dot-wang":
      return require("../assets/animations/project_poyao-dot-wang.json");
    case "hero_bg":
      return require("../assets/animations/hero_bg.json");
  }
};

const animeFns = { loadAnimationData };

export default animeFns;
