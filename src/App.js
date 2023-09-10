import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Ошибка');
    }
  };

  return (
      <div>
        <h1>Тансулятор</h1>
        <input
            type="text"
            value={input}
            readOnly
            className="input-field"
        />
        <div className="button-container">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('+')}>+</button>
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('*')}>*</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={clearInput}>Сброс</button>
          <button onClick={() => handleInput('/')}>/</button>
        </div>
        <p>Результат: {result}</p>
      </div>
  );
}

export default Calculator;