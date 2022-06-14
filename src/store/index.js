import incomSlice from "./incom-slice";
import { configureStore  } from "@reduxjs/toolkit";
import comSlice from "./com-slice";
    

const store = configureStore({
    reducer: {incomTodo: incomSlice.reducer, comTodo: comSlice.reducer}
})

export default store;