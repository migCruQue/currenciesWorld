
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { selectCurrencies } from "../../../config/select8currencies"; 

export default class SelectCurrency extends Component {
  render() {
    const data = selectCurrencies;
    console.log(data);
    return (
        <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        {data.map(element => {
                return <option key={element.currencyCode} value={element.currencyCode}>{element.currencyName}</option>
            })}
      </Form.Select>
    )
  }
}
