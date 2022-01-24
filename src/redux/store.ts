import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import inProgressReducer from "./inProgressSlice";
import doneReducer from "./doneSlice";



export const store = configureStore({
  reducer: combineReducers({todos: todosReducer, inProgress: inProgressReducer, done:doneReducer}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;