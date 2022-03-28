
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { selectCurrencies } from "../../../config/select8currencies"; 


export default class SelectCurrency extends Component {
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {currency: ""};
    }

    handleSelectChange(e){
        this.setState({currency: e.target.value});
    }

    handleInputChange(e){
        this.props.onInputChange(e.target.value);
    }

    render() {
        const data = selectCurrencies;
        const amount = this.props.amount;
        return (
            <Form>
                <Form.Group className="mb-3" controlId="ControlInput">
                    <Form.Label>{this.props.position}</Form.Label> 
                    <Form.Select 
                    aria-label="Default select example"
                    value={this.state.value} 
                    onChange={this.handleSelectChange}
                    >   
                        <option>Select the currency to convert from</option>
                        {data.map(element => {
                                return (<option key={element.currencyCode} value={element.currencyCode}>
                                        {element.currencyName}
                                        </option>);
                        })}
                    </Form.Select>
                    <Form.Control type="number" placeholder="Amount of Money" value={amount} onChange={this.handleInputChange} />
                </Form.Group>
            
            </Form>
            
        )
    }
}
