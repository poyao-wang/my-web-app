import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import DropDown, { DropDownItemProps } from './DropDown';
import Icon from './Icon';
import NavItems from './NavItems';

const dummyNavItems = [
  //
  { text: 'Skills', href: '#' },
  { text: 'Works', href: '#' },
  { text: 'Contact', href: '#' },
];

const NavBar: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const dummyDropItems: DropDownItemProps[] = [
    //
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
      <NavItems items={dummyNavItems} />
      <div className="nav-bar__translate">
        <div className="clickable" onClick={handleClick}>
          <Icon src={'/assets/navbar-language-icon.png'} type={'translate'} />
        </div>
        <DropDown items={dummyDropItems} show={showDropdown} />
      </div>
    </div>
  );
};

export default NavBar;
