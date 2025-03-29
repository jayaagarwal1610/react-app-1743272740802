import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="calc-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;