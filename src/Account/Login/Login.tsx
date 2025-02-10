import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.ts";

function Login() {
  const {handleLogin} = useAuth();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    setValidated(true);
    await handleLogin(form.username.value, form.password.value.value);
    navigate("/decks");
  };

  return (
    <Container className={"text-center"}>
      <Row className={"justify-content-center m-2"}>
        <Col md={6}>
          <Form onSubmit={handleSubmit} validated={validated}>
            <div className={"m-2"}>
              <Form.Group>
                <Form.Control type={"text"} id={"username"} placeholder={"Username"} required></Form.Control>
                <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={"m-2"}>
              <Form.Group>
                <Form.Control type={"password"} id={"password"} placeholder={"Password"} required></Form.Control>
                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className={"m-2"}>
              <Button variant={"primary"} className={"w-100"} type={"submit"}>Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;