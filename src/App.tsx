import React from 'react';
import Calculator from './components/Calculator';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Mini Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;