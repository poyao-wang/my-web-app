import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
  type: 'black' | 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ href, text, type }) => {
  const className = 'btn btn--' + type;
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

export default Button;
