import {configureStore} from "@reduxjs/toolkit";
import totoReducer from "../features/todo/todoSlice";
export const store = configureStore({
    reducer : totoReducer
})