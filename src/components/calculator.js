import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calc_display">
          <span className="calc_temp">(0)</span>
          <span className="calc_value"> 0 </span>
        </div>

        <div className="calc_keys">
          <div className="operators rSide">
            <button type="button" className="btn op_btn"> ÷ </button>
            <button type="button" className="btn op_btn"> x </button>
            <button type="button" className="btn op_btn"> - </button>
            <button type="button" className="btn op_btn"> + </button>
            <button type="button" className="btn op_btn"> = </button>
          </div>

          <div className="operators modif">
            <button type="button" className="btn mod_btn"> AC </button>
            <button type="button" className="btn mod_btn"> +/- </button>
            <button type="button" className="btn mod_btn"> % </button>
          </div>

          <div className="numbers">

            <button type="button" className="btn num_btn"> 1 </button>
            <button type="button" className="btn num_btn"> 2 </button>
            <button type="button" className="btn num_btn"> 3 </button>
            <button type="button" className="btn num_btn"> 4 </button>
            <button type="button" className="btn num_btn"> 5 </button>
            <button type="button" className="btn num_btn"> 6 </button>
            <button type="button" className="btn num_btn"> 7 </button>
            <button type="button" className="btn num_btn"> 8 </button>
            <button type="button" className="btn num_btn"> 9 </button>
            <button type="button" className="btn num_btn"> 0 </button>
            <button type="button" className="btn mod_btn"> . </button>
          </div>
        </div>
      </div>
    );
  }
}
