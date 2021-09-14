import React from 'react';

interface DropDownProps {
  items: { text: string; href: string }[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const className = 'dropdown';
  return (
    <div className={className}>
      {items.map((item) => (
        <a href={item.href}>{item.text}</a>
      ))}
    </div>
  );
};

export default DropDown;
