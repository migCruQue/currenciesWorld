import React from 'react';
// React-Bootstrap components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

export default function InfoAPI(props) {
  return (
    <Card>
    <Card.Body>
      <Card.Title>API INFO</Card.Title>
      <Card.Text>the data for the table has been fetched from</Card.Text>
      <Card.Link href="https://currencyfreaks.com/">https://currencyfreaks.com/</Card.Link>
      <h1>on the <Badge bg="secondary">{props.date}</Badge>at<Badge bg="secondary">{props.time}</Badge></h1>
    </Card.Body>
  </Card>
  );
}
