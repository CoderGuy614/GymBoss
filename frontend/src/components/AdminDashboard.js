import React, { useEffect } from "react";
import { Container, ListGroup, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Loader from "./Loader";
import Message from "./Message";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <ListGroup variant="flush">
          {users.map((u, i) => (
            <ListGroup.Item key={i}>
              <a href={`/users/${u._id}`}>
                {u.name}
                <Image
                  style={{ width: "50px", float: "right" }}
                  src={u.profile.avatar}
                  roundedCircle
                />
              </a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default AdminDashboard;
