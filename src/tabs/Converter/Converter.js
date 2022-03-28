import React from 'react';
import Form from 'react-bootstrap/Form';
import { selectCurrencies } from "../../config/select8currencies"; 

export default function Converter2(props) {

    //select inputs state
    const [selectCurrency, setSelectCurrency] = React.useState({
        selectCurrencyA: "",
        selectCurrencyB: "",
    });

    //select inputs Current Currency Amount
    const [currentCurrencyAmount, setCurrentCurrencyAmount] = React.useState({
        currentCurrency: "A", 
        amount: "",
    });   
    
    // * API latest rates data//////////////////////////////////////////////////////
    const latestRates = props.latestRates;
    
    let ratesConverter = latestRates.rates; 

    const currency_A_DollarRatio = ratesConverter[selectCurrency.selectCurrencyA];

    const currency_B_DollarRatio = ratesConverter[selectCurrency.selectCurrencyB];
    // * ////////////////////////////////////////////////////////////////////////////

    function toCurrencyB(currency_A_Amount){
        return (currency_A_Amount / currency_B_DollarRatio) * currency_A_DollarRatio; 
     }
     
     function toCurrencyA(currency_B_Amount){
         return (currency_B_Amount / currency_A_DollarRatio) * currency_B_DollarRatio; 
      }
     
     function tryConvert(currencyAmount, convert){
         const input = parseFloat(currencyAmount);
         if(Number.isNaN(input)){
             return "";     //Return an empty string if the user types a non valid number
         }
         const output = convert(input);
         const rounded = Math.round(output * 1000) / 1000; // rounds the output to the third decimal place.
         return rounded.toString();
     
     }
  
    function handleChangeSelect(event){
        const {name, value} = event.target;
            setSelectCurrency(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value  
                 }  
            });
    }

    function handleInput_A_Change(event){
        setCurrentCurrencyAmount({currentCurrency: "A", amount: event.target.value});
    }

    function handleInput_B_Change(event){
        setCurrentCurrencyAmount({currentCurrency: "B", amount: event.target.value});
    }

    const currentCurrency = currentCurrencyAmount.currentCurrency;
    const moneyAmount = currentCurrencyAmount.amount;
    const input_A = currentCurrency === "B" ? tryConvert(moneyAmount, toCurrencyB) : moneyAmount;
    const input_B = currentCurrency === "A" ? tryConvert(moneyAmount, toCurrencyA) : moneyAmount;

    return (
        <Form>
            <Form.Group className="mb-3" controlid="ControlInput">
                <Form.Label controlid="selectCurrencyA">Currency A</Form.Label> 
                <Form.Select
                    id="selectCurrencyA" 
                    aria-label="Default select example"
                    name="selectCurrencyA"
                    onChange={handleChangeSelect}
                    value={selectCurrency.selectCurrencyA}
                >   
                    <option>Select the currency to convert from</option>
                    {selectCurrencies.map(element => {
                            return (<option key={element.currencyCode} value={element.currencyCode}>
                                    {element.currencyName}
                                    </option>);
                    })}
                </Form.Select>
                <Form.Control type="number" placeholder="Amount of Money Currency A"  onChange={handleInput_A_Change} name="amountInputA" value={input_A} />
            </Form.Group>

            <Form.Group className="mb-3" controlid="ControlInput">
                <Form.Label controlid="selectCurrencyB">Currency B</Form.Label> 
                <Form.Select
                    id="selectCurrencyB"
                    aria-label="Default select example"
                    name="selectCurrencyB"
                    onChange={handleChangeSelect}
                    value={selectCurrency.selectCurrencyB}
                >   
                    <option>Select the currency to convert from</option>
                    {selectCurrencies.map(element => {
                            return (<option key={element.currencyCode} value={element.currencyCode}>
                                    {element.currencyName}
                                    </option>);
                    })}
                </Form.Select>
                <Form.Control type="number" placeholder="Amount of Money Currency B"  onChange={handleInput_B_Change} name="amountInputB" value={input_B} />
            </Form.Group>
        </Form>
  )
}
