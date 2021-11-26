import React from "react";

interface NavItemsProps {
  items: { text: string; href: string }[];
}

const NavItems: React.FC<NavItemsProps> = ({ items }) => {
  const className = "nav-items";
  return (
    <div className={className}>
      {items.map((item, index) => (
        <a key={index} className="item-nav" href={item.href}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default NavItems;
