import {Alert, Button, Card, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Book, Pencil, Trash} from "react-bootstrap-icons";
import {useDecks} from "../hooks/useDecks.ts";

function Decks() {
  const {decks, decksError, handleDelete} = useDecks();

  const renderToolTip = (props: any, text: string) => (
    <Tooltip id={text} placement="top" {...props}>{text}</Tooltip>
  );

  return (
    <Container>
      <Row className={"row-cols-1 mt-4"}>
        <div className={"d-flex"}>
          <Button variant={"primary"} className={"ms-2"}>+ Create new deck</Button>
          <Button variant={"primary"} className={"ms-2"}>+ Import from text</Button>
        </div>
      </Row>

      {decksError ? (
        <Alert variant={"warning"} role={"alert"}>{decksError}</Alert>
      ) : null}

      {decks?.length > 0 ? (
        <Row className={"row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-2 mb-4"}>
          {decks.map(({name, cards, _id}) => (
            <Col key={_id}>
              <Card>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className={"mb-2 text-body-secondary"}>{cards.length} cards</Card.Subtitle>
                  <div className={"d-flex justify-content-end"}>
                    <OverlayTrigger overlay={(props) => renderToolTip(props, "Review")}>
                      <Button variant={"outline-primary"} className={"m-2"}>
                        <Book></Book>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={(props) => renderToolTip(props, "Edit")}>
                      <Button variant={"outline-primary"} className={"m-2"}>
                        <Pencil></Pencil>
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger overlay={(props) => renderToolTip(props, "Delete")}>
                      <Button variant={"outline-primary"} className={"m-2"} onClick={() => handleDelete(_id)}>
                        <Trash></Trash>
                      </Button>
                    </OverlayTrigger>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div>You have no decks yet. Click Create Deck to make your first deck!</div>
      )}
    </Container>
  );
}

export default Decks;