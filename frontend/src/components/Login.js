import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Card>
        <Card.Header>
          <h1 className="text-center">Login to Your Account</h1>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              block
              variant="primary"
              type="submit"
              href="/user-dashboard"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
