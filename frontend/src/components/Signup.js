import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { register } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Signup = ({ location, history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState(null);

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push("/user-dashboard");
    }
  }, [history, userInfo]);

  const handleChange = (e) => {
    setMessage("");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = values;
    if (password !== password2) {
      setMessage("Passwords Do Not Match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  const { email, password } = values;
  return (
    <Container>
      <Card>
        <Card.Header>
          <h1 className="text-center">Login to Your Account</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => handleChange(e)}
                name="email"
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                name="password"
                value={password}
              />
            </Form.Group>

            <Button
              block
              variant="primary"
              type="submit"
              // href="/user-dashboard"
            >
              Submit
            </Button>
          </Form>
          <Row className="py-3">
            <Col className="text-center">
              Not a Member Yet? <Link to={"/signup"}>Click Here to Signup</Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
