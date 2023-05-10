import { connect } from "react-redux";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { updateTodo } from "../redux/actions";

function EditTodoModal({ todo, updateTodo }) {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState(todo.name);

  const toggle = () => setModal(!modal);

  const toggleClear = () => {
    setInput(todo.name);
    setModal(!modal);
  };

  const handleButtonSave = () => {
    updateTodo(todo.id, input);
    toggleClear();
  };

  return (
    <>
      <Button variant="outline-secondary" onClick={toggle}>
        Edit
      </Button>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo here"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleButtonSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={toggleClear}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (id, newTitle) => dispatch(updateTodo(id, newTitle)),
});

export default connect(null, mapDispatchToProps)(EditTodoModal);
