import React from 'react';

interface DropDownProps {
  items: { text: string; href: string }[];
  show?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({ items, show = false }) => {
  const className = show ? 'dropdown' : 'dropdown hide';
  return (
    <div className={className}>
      {items.map((item) => (
        <a href={item.href}>{item.text}</a>
      ))}
    </div>
  );
};

export default DropDown;
