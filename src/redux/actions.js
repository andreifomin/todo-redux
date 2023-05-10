export const CREATE_TODO = "CREATE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_DONE_TODO = "TOGGLE_DONE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const createTodo = (newTodo) => ({
  type: CREATE_TODO,
  payload: newTodo,
});

export const updateTodo = (id, newName) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    newName,
  },
});

export const toggleDoneTodo = (id) => ({
  type: TOGGLE_DONE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
