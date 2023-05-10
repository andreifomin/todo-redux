import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_DONE_TODO,
  UPDATE_TODO,
} from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      name: "Learn React",
      isDone: false,
    },
    {
      id: 2,
      name: "Fill up LinkedIn",
      isDone: false,
    },
    {
      id: 3,
      name: "Find a job",
      isDone: false,
    },
  ],
  title: "Todo list",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case UPDATE_TODO:
      const todosUpdated = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.newName }
          : todo
      );
      return { ...state, todos: todosUpdated };

    case TOGGLE_DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };

    case DELETE_TODO:
      const todosDeleted = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: todosDeleted };
    default:
      return state;
  }
};

export default reducer;
