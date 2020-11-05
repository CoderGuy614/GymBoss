import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import PlanCard from "./PlanCard";
import { getUserDetails } from "../actions/userActions";

const UserDashboard = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const authUserId = userLogin.userInfo._id;
  const userDetails = useSelector((state) => state.userDetails);
  const {
    loading,
    user: { name, email, profile },
  } = userDetails;

  useEffect(() => {
    if (!loading && !authUserId) {
      history.push("/login");
    } else {
      dispatch(getUserDetails(authUserId));
    }
  }, [dispatch, history, authUserId]);

  // useEffect(() => {
  //   if (user && user.profile) {
  //     const { profile } = user;
  //   }
  // }, [user]);

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
        {loading ? (
          <Loader />
        ) : (
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
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>{profile && profile.phone}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>
                      <ListGroup>
                        <ListGroup.Item>
                          {profile && profile.address.street}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {profile && profile.address.city}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {profile && profile.address.state}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {profile && profile.address.zip}
                        </ListGroup.Item>
                      </ListGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>DOB:</td>
                    <td>{profile && profile.dob}</td>
                  </tr>
                  <tr>
                    <td>Emergency Contact Name:</td>
                    <td>{profile && profile.emergencyContactName}</td>
                  </tr>
                  <tr>
                    <td>Emergency Contact Phone:</td>
                    <td>{profile && profile.emergencyContactPhone}</td>
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
        )}
      </Row>
    </Container>
  );
};

export default UserDashboard;
