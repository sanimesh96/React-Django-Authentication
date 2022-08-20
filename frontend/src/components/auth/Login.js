import React from "react";
import { useState } from "react";
import { Button, Form, Container, Col, Card, FormGroup } from "react-bootstrap";
var axios = require("axios");
const Login = () => {

  const [formData, setFormData] = useState([]);


  const callApi = (e) => {
    e.preventDefault();
    let response = axios.post("http://localhost:8000/api/login/", {
      email: formData.email,
      password: formData.password,
    }).then((resp) => {
      console.log(resp)
    }).catch((error)=>{
      console.log(error.response);
    })
  };
  return (
    <Col md={4}>
      <Card className="shadow-lg p-5">
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
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
  )
}

export default Login
