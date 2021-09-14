import React, { useState } from 'react';
import DropDown from './DropDown';
import Icon from './Icon';
import NavItems from './NavItems';

const dummyNavItems = [
  //
  { text: 'Skills', href: '#' },
  { text: 'Works', href: '#' },
  { text: 'Contact', href: '#' },
];
const dummyDropItems = [
  //
  { text: 'English', href: '#' },
  { text: '中　文', href: '#' },
  { text: '日本語', href: '#' },
];

const NavBar: React.FC = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

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
