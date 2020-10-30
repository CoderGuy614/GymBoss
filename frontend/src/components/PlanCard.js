import React from "react";
import { Col, Card, Button } from "react-bootstrap";
const PlanCard = ({ title, description, color, url }) => {
  return (
    <Col>
      <Card style={{ width: "12rem" }}>
        <i className={"fas fa-star bigStar mx-auto p-3" + color}></i>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
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
