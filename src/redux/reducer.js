
const initialState = {
  todoList: [

  ],
  title: "Todo list",
};

function reducer(state, action) {
  switch (action.type) {
    case "createTask":
      return state;
    case "updateTask":
      return state;
    case "finishTask":
      return state;
    case "deleteTask":
      return state;
  }
}

export default reducer;