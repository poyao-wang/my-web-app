import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import DropDown, { DropDownItemProps } from './DropDown';
import Icon from './Icon';
import NavItems from './NavItems';
import * as TypeMainData from '../mainData.model';

const NavBar: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems: TypeMainData.ItemNav[] = t('navbar.navItems', {
    returnObjects: true,
  });

  const dropDownItems: DropDownItemProps[] = [
    { text: 'English', href: '#', onClick: () => i18n.changeLanguage('en') },
    { text: '中　文', href: '#', onClick: () => i18n.changeLanguage('zh') },
    { text: '日本語', href: '#', onClick: () => i18n.changeLanguage('ja') },
  ];

  const handleClick = (): void => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="nav-bar">
      <a href="https://www.google.com/">
        <Icon src={'assets/navbar-brand-logo.png'} type={'logo'} />
      </a>
      <NavItems items={navItems} />
      <div className="nav-bar__translate">
        <div className="clickable" onClick={handleClick}>
          <Icon src={'/assets/navbar-language-icon.png'} type={'translate'} />
        </div>
        <DropDown items={dropDownItems} show={showDropdown} />
      </div>
    </div>
  );
};

export default NavBar;
