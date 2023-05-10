import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import {useEffect, useState} from "react";
import { createTodo } from "../redux/actions";

const TodoList = ({ todos, title, createTodo }) => {
  const [input, setInput] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      name: input,
      isDone: false,
    };
    createTodo(newTodo);
    setInput("");
  };

  return (
    <div>
      <h3>{title}</h3>

      <form onSubmit={onFormSubmit} className="">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required
          placeholder="New todo"
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Create
        </button>
      </form>

      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  title: state.title,
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (newTodo) => dispatch(createTodo(newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
