import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todos:[],
// }

const comSlice = createSlice({
  name: "com-todo",
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

export const comActions = comSlice.actions;

export default comSlice;
