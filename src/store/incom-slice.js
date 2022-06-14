import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todos:[],
// }

const incomSlice = createSlice({
  name: "incom-todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: action.payload.id,
        todo: action.payload.todo,
      });
    //   console.log("todos : ", state.todos[0]);
    //   console.log("todos : ", state.todos[1]);
    },

    removeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
  },
});

export const incomActions = incomSlice.actions;

export default incomSlice;
