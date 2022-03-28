import React from 'react';
// React-Bootstrap components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
//Styles
import "./InfoAPI.scss";
//Icons
import dateIcon from "./icons/calendar-event.svg";
import timeIcon from "./icons/clock.svg";

export default function InfoAPI(props) {
  
  const date = props.date;
  const dateStrings = date.split(" ");
  return (
    <Card className="API-details">
      <Card.Body className="text-center">
        <Card.Title className="mt-2 mb-3">API INFO</Card.Title>
        <Card.Text>the data for the table has been fetched from <Card.Link href="https://currencyfreaks.com/">https://currencyfreaks.com/</Card.Link></Card.Text>
        <Badge className="me-2 p-2" bg="primary">
          <img src={dateIcon} alt="calendar icon"/>
          {dateStrings[0]}
        </Badge>
        <Badge className="p-2" bg="success">
          <img src={timeIcon} alt="clock icon"/>
          {dateStrings[1]}
        </Badge>
      </Card.Body>
    </Card>
  );
}
