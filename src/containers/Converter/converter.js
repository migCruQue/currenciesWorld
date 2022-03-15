import React, { Component } from 'react';
import SelectCurrency from './SelectCurrency/SelectCurrency';

class Converter extends Component {
  render() {
    return (
      <div>
          <h1>Converter</h1>
          <SelectCurrency />
      </div>
    );
  }
}

export default Converter;