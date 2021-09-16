import React from 'react';

export interface DropDownItemProps {
  text: string;
  href: string;
  onClick?: () => void;
}

interface DropDownProps {
  items: DropDownItemProps[];
  show?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ items, show = false }) => {
  const className = show ? 'dropdown' : 'dropdown hide';
  return (
    <div className={className}>
      {items.map((item) => (
        <a onClick={item.onClick} href={item.href}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default DropDown;
