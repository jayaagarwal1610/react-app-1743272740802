import React from 'react';

interface DisplayProps {
  value: number;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      <span>{value}</span>
    </div>
  );
};

export default Display;