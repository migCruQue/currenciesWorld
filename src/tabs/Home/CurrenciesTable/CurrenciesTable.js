import React from 'react';
import Table from 'react-bootstrap/Table';
// STYLE
import "./CurrenciesTable.scss";


export default function CurrenciesTable(props) {
  return (
  <Table className="table table-success" striped bordered hover>
      <caption>the 10 most valuable currencies in the world</caption>  
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
          {props.tableData.map((element, index) => {
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
