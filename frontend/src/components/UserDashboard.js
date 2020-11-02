import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Table,
} from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import PlanCard from "./PlanCard";

const UserDashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Row className="justify-content-center">
            <Card style={{ width: "12rem" }}>
              <i className={"fas fa-star bigStar mx-auto p-3 gold"}></i>
              <Card.Body>
                <Card.Title className="text-center">Gold Plan</Card.Title>
                <Card.Title className="text-center">
                  <strong>$25</strong> / Month
                </Card.Title>
                <Card.Text>The Gold Plan is pretty good</Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className="justify-content-center my-2">
            <h3>Member Since: 2019</h3>
          </Row>
        </Col>

        <Col md={8}>
          <Row className="m-2">
            <h1>Your Profile:</h1>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="text-center"
            >
              <thead></thead>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>Jonny Lutz</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>JLutz.110@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>(614) 400-9208</td>
                </tr>
                <tr>
                  <td>DOB:</td>
                  <td>02/02/1985</td>
                </tr>
                <tr>
                  <td>Emergency Contact Name:</td>
                  <td>Linda Lutz</td>
                </tr>
                <tr>
                  <td>Emergency Contact Phone:</td>
                  <td>(614) 876-2980</td>
                </tr>
              </tbody>
            </Table>
            <Button block variant="outline-secondary">
              Edit Profile
            </Button>
          </Row>
          <Row className="m-2">
            <h1>Your Payment Settings:</h1>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="text-center"
            >
              <thead></thead>
              <tbody>
                <tr>
                  <td>Payment Method:</td>
                  <td>Visa</td>
                </tr>
                <tr>
                  <td>Payment Amount:</td>
                  <td>$25</td>
                </tr>
                <tr>
                  <td>Last Payment Date:</td>
                  <td>Jan 1st 2021</td>
                </tr>
                <tr>
                  <td>Next Payment Date:</td>
                  <td>Feb 1st 2021</td>
                </tr>
                <tr>
                  <td>AutoPay:</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </Table>
            <Button block variant="outline-secondary">
              Edit Payment Settings
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
