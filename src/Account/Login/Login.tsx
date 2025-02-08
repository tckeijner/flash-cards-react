import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {FormEvent, useState} from "react";
import {AccountDataModel, useAuthStore} from "../../store/authStore.ts";

function Login() {
  const {setAuthData} = useAuthStore();
  const [validated, setValidated] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    setValidated(true);

    const username = form.username.value;
    const password = form.password.value;
    axios.post<AccountDataModel>('http://localhost:5200/users/login', {username, password})
      .then(response => setAuthData(response.data))
      .catch(error => console.log(error))
  }

  return (
    <Container className={"text-center"}>
      <Row className={"justify-content-center"}>
        <Form onSubmit={handleSubmit} validated={validated}>
          <div className={"m-2"}>
            <Col md={6}>
              <Form.Group>
                <Form.Control type={"text"} id={"username"} placeholder={'Username'} required></Form.Control>
                <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </div>
          <div className={"m-2"}>
            <Col md={6}>
              <Form.Group>
                <Form.Control type={"password"} id={"password"} placeholder={'Password'} required></Form.Control>
                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </div>
          <div className={"m-2"}>
            <Button variant={"primary"} className={"w-100"} type={"submit"}>Login</Button>
          </div>
        </Form>
      </Row>
    </Container>
  )
}

export default Login;