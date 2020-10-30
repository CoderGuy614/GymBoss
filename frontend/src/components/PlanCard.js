import React from "react";
import { Col, Card, Button } from "react-bootstrap";
const PlanCard = ({ title, description, price, color, url }) => {
  return (
    <Col className="d-flex justify-content-center">
      <Card style={{ width: "12rem" }}>
        <i className={"fas fa-star bigStar mx-auto p-3" + color}></i>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Title className="text-center">
            <strong>${price}</strong> / Month
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button block variant="secondary" href={url}>
            Select {title}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PlanCard;
