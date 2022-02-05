import React from 'react';
import Table from 'react-bootstrap/Table';
// STYLE
import "./CurrenciesTable.scss";
//components
import InfoAPI from "../InfoAPI/InfoAPI";


export default function CurrenciesTable(props) {
  return (<Table className="table table-success" striped bordered hover>
  <div>
    <caption>the 25 most valuable currencies in the world</caption>
    <InfoAPI  time={props.time} date={props.date}/>
    </div>  
  <thead>
    <tr>
      <th>RANK</th>
      <th>CURRENCY NAME</th>
      <th>COUNTRY</th>
      <th>CODE</th>
      <th>RATE</th>
    </tr>
  </thead>
  <tbody>
        {props.objectData.map((element, index) => {
      return (
        <tr key={index + 1}>
        <td>{index + 1}</td>
        <td>{element.currencyName}</td>
        <td>
          <img className="flagIcon roundedCircle" src={element.icon} alt={element.icon} /> 
          {element.countryName}
        </td>
        <td>{element.currencyCode}</td>
        <td>{element.rate}</td>
      </tr>
      );
    })}
  </tbody>
</Table>);
}
