import { connect } from "react-redux";
import EditTodoModal from "./EditTodoModal";
import { deleteTodo, toggleDoneTodo } from "../redux/actions";

function TodoListItem({ todo, toggleDoneTodo, deleteTodo }) {
  return (
    <ul>
      <li>
        {!todo.isDone ? (
          <>
            {todo.name} <EditTodoModal todo={todo} />{" "}
            <button
              className="btn btn-outline-success"
              onClick={() => toggleDoneTodo(todo.id)}
            >
              Done
            </button>
          </>
        ) : (
          <>
            <span style={{ textDecoration: "line-through" }}>{todo.name}</span>{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>{" "}
            <button
              className="btn btn-outline-warning"
              onClick={() => toggleDoneTodo(todo.id)}
            >
              Return
            </button>
          </>
        )}
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleDoneTodo: (id) => dispatch(toggleDoneTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
