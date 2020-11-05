import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  ListItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";

const UserDetails = ({ match }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userDetails.user);
  const { name, email } = profile;

  useEffect(() => {
    dispatch(getUserDetails(match.params.id));
  }, [dispatch]);

  return (
    <Container>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </Container>
  );
};

export default UserDetails;
