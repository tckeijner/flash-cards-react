import {Button, ButtonGroup, Card, Col, Container, Form, Row, Stack} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {Trash} from "react-bootstrap-icons";
import {useEditDeck} from "../../hooks/useEditDeck.ts";

function EditDeck() {
  const {deckId} = useParams();
  const {
    deck,
    name,
    setName,
    addEmptyCardToDeck,
    deleteCardFromDeck,
    updateCard,
    saveDeck
  } = useEditDeck(deckId ?? "");
  const navigate = useNavigate();

  const onClickSave = async () => {
    await saveDeck();
    navigate("/decks");
  };

  const cancel = () => {
    navigate("/decks");
  };

  return (
    <Container>
      <div className={"mt-4"}>
        <Form>
          <Stack gap={4}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control type={"text"} id="name" placeholder="Enter deck name" value={name}
                                onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className={"col-1"}><h2 className={"h2"}>Cards</h2></Col>
              <Col className={"col d-flex justify-content-end"}>
                <ButtonGroup>
                  <Button variant={"outline-primary"} onClick={addEmptyCardToDeck}>+ Add</Button>
                  <Button variant={"primary"} onClick={onClickSave}>Save</Button>
                  <Button variant={"secondary"} onClick={cancel}>Cancel</Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Stack gap={4}>
                {deck.cards.map((card, index) => (
                  <Card key={index}>
                    <Container>
                      <Form.Label className={"mt-2"}>Front</Form.Label>
                      <Form.Control as="textarea" rows={3} value={card.front}
                                    onChange={(e) => updateCard(e.target.value, index, "front")}></Form.Control>
                      <Form.Label className={"mt-2"}>Back</Form.Label>
                      <Form.Control as="textarea" rows={3} value={card.back}
                                    onChange={(e) => updateCard(e.target.value, index, "back")}></Form.Control>
                    </Container>
                    <div className={"d-flex justify-content-end mt-2 mb-2"}>
                      <Button variant={"primary"} className={"m-2"}
                              onClick={() => deleteCardFromDeck(index)}><Trash/></Button>
                    </div>
                  </Card>
                ))}
              </Stack>
            </Row>
          </Stack>

        </Form>
      </div>
    </Container>
  );
}

export default EditDeck;