import React from 'react';
import Form from 'react-bootstrap/Form';
import { selectCurrencies } from "../../config/select8currencies"; 
import { latestRates } from '../../config/dataTesting';

export default function Converter2(props) {

    const [formData, setFormData] = React.useState({
        selectCurrencyA: "",
        selectCurrencyB: "",
    });

    const [currentCurrencyAmount, setCurrentCurrencyAmount] = React.useState({
        currentCurrency: "A", 
        amount: "",
    });   
    
    console.log(formData, currentCurrencyAmount);

    
    let ratesConverter = latestRates.rates; 

    const currency_A_DollarRatio = ratesConverter[formData.selectCurrencyA];

    const currency_B_DollarRatio = ratesConverter[formData.selectCurrencyB];
    

    function toCurrencyB(currencyAAmount){
        console.log("toCurrencyB");
        return (currencyAAmount / currency_B_DollarRatio) * currency_A_DollarRatio; 
     }
     
     function toCurrencyA(currencyBAmount){
         return (currencyBAmount / currency_A_DollarRatio) * currency_B_DollarRatio; 
      }
     
     function tryConvert(currencyAmount, convert){
         console.log("tryConvert", currencyAmount, convert);
         const input = parseFloat(currencyAmount);
         console.log(input);
         if(Number.isNaN(input)){
             return "";
         }
         const output = convert(input);
         console.log(output);
         const rounded = Math.round(output * 1000) / 1000; // rounds the output to the third decimal place.
         console.log(rounded.toString());
         return rounded.toString();
     
     }
  
    function handleChangeSelect(event){
        const {name, value} = event.target;
            setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value  
                 }  
            });
    }

    

    function handleInput_A_Change(e){
        setCurrentCurrencyAmount({currentCurrency: "A", amount: e.target.value});
    }

    function handleInput_B_Change(e){
        setCurrentCurrencyAmount({currentCurrency: "B", amount: e.target.value});
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
                    value={formData.selectCurrencyA}
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
                    value={formData.selectCurrencyB}
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
