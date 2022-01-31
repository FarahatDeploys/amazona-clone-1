import data from "./data";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const dataReducer = createSlice({
  name: "datareducers",
  initialState,
  reducers: {
    datareducer: (state, action) => {
      return data.products;
    },
  },
});
const store = configureStore({ reducer: dataReducer });
export default store;
