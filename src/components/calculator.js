import React from 'react';
import calculate from '../logic/calculate';
import Button from './button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: {},
    };
    this.operatorsR = ['÷', 'x', '-', '+', '='];
    this.operatorsM = ['AC', '+/-', '%'];
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      calc: {
        total: null,
        next: null,
        operation: null,
      },
    });
  }

  handleClick(buttonName) {
    this.setState((state) => ({
      calc: calculate(state.calc, buttonName),
    }));
  }

  createNum() {
    this.input = [];

    for (let i = 9; i > -1; i -= 1) {
      this.input.push(
        <Button
          key={`${i}`}
          classN="btn num_btn"
          value={`${i}`}
          handleClick={this.handleClick}
        />,
      );
    }
    return this.input;
  }

  createOperations(operations) {
    this.operationsContainer = [];
    operations.forEach((operation) => {
      this.operationsContainer.push(
        <Button
          key={operation}
          classN="btn op_btn"
          value={operation}
          handleClick={this.handleClick}
        />,
      );
    });
    return this.operationsContainer;
  }

  render() {
    const { calc } = this.state;
    const { total, next } = calc;
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
            {this.createOperations(this.operatorsR)}
          </div>

          <div className="operators modif">
            {this.createOperations(this.operatorsM)}
          </div>

          <div className="numbers">
            {this.createNum()}
            <Button
              classN="btn num_btn"
              value="."
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
