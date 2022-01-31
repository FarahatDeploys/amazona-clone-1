import data from "./data";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { productListReducer } from "./reducers/productReducers";
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
const reducer = combineReducers({ productList: productListReducer });
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
