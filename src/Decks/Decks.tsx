import {Alert, Button, Card, Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Book, Pencil, Trash} from "react-bootstrap-icons";
import {useDecks} from "../hooks/useDecks.ts";
import {useState} from "react";
import CreateDeckModal from "./CreateDeck.tsx";
import {Link} from "react-router-dom";

function Decks() {
  const {decks, decksError, handleDeleteDeck} = useDecks();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const renderToolTip = (props: any, text: string) => (
    <Tooltip id={text} placement="top" {...props}>{text}</Tooltip>
  );

  return (
    <>
      <Container>
        <Row className={"row-cols-1 mt-4"}>
          <div className={"d-flex"}>
            <Button variant={"primary"} className={"ms-2"} onClick={() => setShowCreateModal(true)}>
              + Create new deck</Button>
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
                    <Card.Subtitle className={"mb-2 text-body-secondary"}>{cards?.length ?? 0} cards</Card.Subtitle>
                    <div className={"d-flex justify-content-end"}>
                      <OverlayTrigger overlay={(props) => renderToolTip(props, "Review")}>
                        <Button variant={"outline-primary"} className={"m-2"}>
                          <Book></Book>
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={(props) => renderToolTip(props, "Edit")}>
                        <Link to={"/decks/" + _id}><Button variant={"outline-primary"} className={"m-2"}>
                          <Pencil></Pencil>
                        </Button></Link>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={(props) => renderToolTip(props, "Delete")}>
                        <Button variant={"outline-primary"} className={"m-2"} onClick={() => handleDeleteDeck(_id)}>
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

      <CreateDeckModal show={showCreateModal} onHide={() => setShowCreateModal(false)}></CreateDeckModal>

    </>
  );
}

export default Decks;