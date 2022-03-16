import React, { Component } from 'react';
import SelectCurrency from './SelectCurrency/SelectCurrency';

const currencyADollarRatio = 0.77;
const currencyBDollarRatio = 0.83;


function toCurrencyB(currencyAAmount){
   return (currencyAAmount / currencyADollarRatio) * currencyBDollarRatio; 
}

function toCurrencyA(currencyBAmount){
    return (currencyBAmount / currencyBDollarRatio) * currencyADollarRatio; 
 }

function tryConvert(currencyAmount, convert){
    const input = parseFloat(currencyAmount);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000; // rounds the output to the third decimal place.
    return rounded.toString();

}

class Converter extends Component {

  constructor(props) {
    super(props);
    this.handleInputAChange = this.handleInputAChange.bind(this);
    this.handleInputBChange = this.handleInputBChange.bind(this);
    this.state = {amount: "", currentCurrency: "A"};
  }

  handleInputAChange(amount){
    this.setState({currentCurrency: "A", amount});
  }

  handleInputBChange(amount){
    this.setState({currentCurrency: "B", amount});
  }

  render() {
    const currentCurrency = this.state.currentCurrency;
    const amount = this.state.amount;
    const inputA = currentCurrency === "B" ? tryConvert(amount, toCurrencyB) : amount;
    const inputB = currentCurrency === "A" ? tryConvert(amount, toCurrencyA) : amount;
    return (
      <div>
          <h1>Converter</h1>
          <SelectCurrency position="A" amount={inputA} onInputChange={this.handleInputAChange} />
          <SelectCurrency position="B" amount={inputB} onInputChange={this.handleInputBChange}/>
      </div>
    );
  }
}

export default Converter;