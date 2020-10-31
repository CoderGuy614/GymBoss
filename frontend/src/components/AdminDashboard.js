import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <Container>
      <ListGroup>
        {users.map((u, i) => (
          <ListGroup.Item key={i}>
            <a href={`/users/${u._id}`}>{u.name}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminDashboard;
