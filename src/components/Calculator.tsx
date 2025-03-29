import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  
  const handleAdd = () => {
    setValue(prevValue => prevValue + 1);
  };
  
  const handleSubtract = () => {
    setValue(prevValue => prevValue - 1);
  };
  
  const handleReset = () => {
    setValue(0);
  };
  
  return (
    <div className="calculator">
      <Display value={value} />
      <div className="buttons">
        <Button onClick={handleSubtract} label="-" />
        <Button onClick={handleReset} label="Reset" />
        <Button onClick={handleAdd} label="+" />
      </div>
    </div>
  );
};

export default Calculator;