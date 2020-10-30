import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PlanCard from "./PlanCard";
const HomePage = () => {
  const plans = [
    {
      title: "Bronze Plan",
      description: "Bronze Plan Description",
      color: " bronze",
      url: "/bronze",
    },
    {
      title: "Silver Plan",
      description: "Silver Plan Description",
      color: " silver",
      url: "/silver",
    },
    {
      title: "Gold Plan",
      description: "Gold Plan Description",
      color: " gold",
      url: "/gold",
    },
  ];

  return (
    <>
      <Row>
        {plans.map((p, i) => (
          <PlanCard
            key={i}
            title={p.title}
            description={p.description}
            color={p.color}
            url={p.url}
          />
        ))}
      </Row>
    </>
  );
};

export default HomePage;
