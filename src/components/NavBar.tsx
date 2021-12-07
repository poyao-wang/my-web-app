import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import DropDown, { DropDownItemProps } from "./DropDown";
import Icon from "./Icon";
import NavItems from "./NavItems";
import * as TypeMainData from "../mainData.model";

const NavBar: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems: TypeMainData.ItemNav[] = t("navbar.navItems", {
    returnObjects: true,
  });

  const changeLangAndHideDropdown: (langCode: string) => void = (
    langCode: string
  ) => {
    i18n.changeLanguage(langCode);
    setShowDropdown(false);
  };

  const dropDownItems: DropDownItemProps[] = [
    {
      text: "English",
      href: "#",
      onClick: () => changeLangAndHideDropdown("en"),
    },
    {
      text: "中　文",
      href: "#",
      onClick: () => changeLangAndHideDropdown("zh"),
    },
    {
      text: "日本語",
      href: "#",
      onClick: () => changeLangAndHideDropdown("ja"),
    },
  ];

  const handleClick = (): void => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="nav-bar">
      <a className="icon_logo" href="https://poyao.wang/">
        <Icon src={"assets/navbar-brand-logo.png"} type={"logo"} />
      </a>
      <NavItems items={navItems} />
      <div className="nav-bar__translate">
        <div className="clickable" onClick={handleClick}>
          <Icon src={"/assets/navbar-language-icon.png"} type={"translate"} />
        </div>
        <DropDown items={dropDownItems} show={showDropdown} />
      </div>
    </div>
  );
};

export default NavBar;
