import {Button, Form, Modal} from "react-bootstrap";
import {FormEvent, useState} from "react";
import {useDecks} from "../hooks/useDecks.ts";

function CreateDeckModal(props: { show: boolean, onHide: () => void }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const {handleCreateDeck} = useDecks();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();


    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    await handleCreateDeck({name});
    props.onHide();
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Create new Deck</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} id={"newDeckForm"} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type={"text"} id={"name"} placeholder={"Deck name"} value={name}
                          onChange={(e) => setName(e.target.value)} required></Form.Control>
            <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button form="newDeckForm" type={"submit"}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDeckModal;