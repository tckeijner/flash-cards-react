import { Button, Col, Container, Row } from "react-bootstrap";

function Welcome() {
    return (
        <Container className={'text-center'}>
            <h1 className="h1">Welcome to Flash Cards!</h1>
            <div>Please log in or create an account</div>
            <Row className={'justify-content-center m-2'}>
                <Col className="col-6 col-sm-4 col-md-3">
                    <Button variant={"primary"} type="button" className="btn btn-primary w-100">
                        Login
                    </Button>
                </Col>
            </Row>
            <Row className={'justify-content-center m-2'}>
                <div className="col-6 col-sm-4 col-md-3">
                    <Button variant={"primary"} type="button" className="btn btn-primary w-100">
                        Create account
                    </Button>
                </div>
            </Row>
        </Container>
    )
}

export default Welcome;