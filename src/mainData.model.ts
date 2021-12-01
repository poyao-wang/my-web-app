export type AnimeName =
  | "about_front-end"
  | "about_back-end"
  | "about_language"
  | "project_tabatimer"
  | "project_poyao-dot-wang";

export interface ItemNav {
  text: string;
  href: string;
}

export interface NavBar {
  navItems: ItemNav[];
}

export interface SectionHero {
  title: string;
  subtitle: string;
}

export interface ItemAbout {
  iconAnimeName: AnimeName;
  imgSrc: string;
  titleText: string;
  contentText: string;
}

export interface SectionAbout {
  title: string;
  subtitle: string;
  aboutItems: ItemAbout[];
}

export interface ItemSkill {
  imgSrc: string;
  title: string;
}

export interface SkillItems {
  lefter: ItemSkill;
  left1: ItemSkill;
  left2: ItemSkill;
  mid1: ItemSkill;
  mid2: ItemSkill;
  mid3: ItemSkill;
  right1: ItemSkill;
  right2: ItemSkill;
  righter: ItemSkill;
}

export interface SectionSkills {
  title: string;
  subtitle: string;
  skillItems: SkillItems;
}

export interface ItemProject {
  iconAnimeName: AnimeName;
  imgSrc: string;
  title: string;
  text: string;
  btnLink: string;
  btnText: string;
}

export interface SectionProjects {
  title: string;
  subtitle: string;
  projectItems: ItemProject[];
}

export interface ItemContact {
  text: string;
  iconSrc: string;
  href: string;
}

export interface SectionContacts {
  title: string;
  subtitle: string;
  contactItems: ItemContact[];
}

export interface RootObject {
  navbar: NavBar;
  sectionHero: SectionHero;
  sectionAbout: SectionAbout;
  sectionSkills: SectionSkills;
  sectionProjects: SectionProjects;
  sectionContacts: SectionContacts;
}
