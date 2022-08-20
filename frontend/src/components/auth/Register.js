import React from "react";
import { useState } from "react";
import { Button, Form, Container, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState([]);
  let navigate = useNavigate();

  const callApi = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password2: formData.password1,
      })
      .then((resp) => {
        console.log(resp);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.response);
      });
  };

  return (
    <Col md={4}>
      <Card className="shadow-lg p-5">
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username"
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ReEnter Password"
                onChange={(e) => {
                  setFormData({ ...formData, password1: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                callApi(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </Card>
    </Col>
  );
};

export default Register;
