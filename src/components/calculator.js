import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

const Calculator = () => {
  const operatorsR = ['÷', 'x', '-', '+', '='];
  const operatorsM = ['AC', '+/-', '%'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = state;

  const handleClick = (btnName) => {
    setState((prevState) => calculate(prevState, btnName));
  };

  const createNum = (numbers) => {
    const numBtn = numbers.map((number) => (
      <Button
        key={`${number}`}
        classN="btn num_btn"
        value={`${number}`}
        handleClick={handleClick}
      />
    ));
    return numBtn;
  };

  const createOperations = (operations) => {
    const operationsContainer = operations.map((operation) => (
      <Button
        key={operation}
        classN="btn op_btn"
        value={operation}
        handleClick={handleClick}
      />
    ));
    return operationsContainer;
  };

  return (
    <div className="calculator">
      <div className="calc_display">
        <span className="calc_value">
          {' '}
          {next || total || '0'}
        </span>
      </div>

      <div className="calc_keys">
        <div className="operators rSide">
          {createOperations(operatorsR)}
        </div>

        <div className="operators modif">
          {createOperations(operatorsM)}
        </div>

        <div className="numbers">
          {createNum(numbers)}

        </div>
      </div>
    </div>
  );
};

export default Calculator;
