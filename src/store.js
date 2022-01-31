import data from "./data";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const initialState = {};
// const dataReducer = createSlice({
//   name: "datareducers",
//   initialState,
//   reducers: {
//     datareducer: (state, action) => {
//       return data.products;
//     },
//   },
// });
const reducer = (state, action) => {
  return { product: data.products };
};
// const store = configureStore({
//   reducer: dataReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk,
//     }),
// });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
