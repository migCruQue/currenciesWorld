import React from 'react';
// React-Bootstrap components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
//Styles
import "./InfoAPI.scss";

export default function InfoAPI(props) {
  return (
    <Card className="API-details">
      <Card.Body>
        <Card.Title>API INFO</Card.Title>
        <Card.Text>the data for the table has been fetched from <Card.Link href="https://currencyfreaks.com/">https://currencyfreaks.com/</Card.Link></Card.Text>
        <Badge bg="secondary">at {props.date}</Badge>
      </Card.Body>
    </Card>
  );
}
