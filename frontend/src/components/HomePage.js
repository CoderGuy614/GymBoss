import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PlanCard from "./PlanCard";
const HomePage = () => {
  const plans = [
    {
      title: "Bronze Plan",
      price: "25",
      description: "Bronze Plan Description",
      color: " bronze",
      url: "/bronze",
    },
    {
      title: "Silver Plan",
      price: "35",
      description: "Silver Plan Description",
      color: " silver",
      url: "/silver",
    },
    {
      title: "Gold Plan",
      price: "45",
      description: "Gold Plan Description",
      color: " gold",
      url: "/gold",
    },
  ];

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        <h1>Choose a Plan</h1>
      </Row>
      <hr />
      <Row>
        {plans.map((p, i) => (
          <PlanCard
            key={i}
            title={p.title}
            price={p.price}
            description={p.description}
            color={p.color}
            url={p.url}
          />
        ))}
      </Row>
      <hr />
      <Row className="justify-content-center">
        <h1>Already a Member ?</h1>
      </Row>
      <hr />
      <Button size="lg" block variant="outline-primary" href="/login">
        Sign In
      </Button>
    </Container>
  );
};

export default HomePage;
