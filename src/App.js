import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      if (input === '' || /[+\-*/.]$/.test(input)) {
        setResult('Error');
      } else {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult('Error');
        }
      }
      return;
    }

    if (value === 'C') {
      setInput('');
      setResult('');
      return;
    }

    setInput((prevInput) => prevInput + value);
  };

  return (
    <div className="Calculator">
      <input type="text" value={input} readOnly />
      <div>{result}</div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'].map((value, index) => (
          <button key={index} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
