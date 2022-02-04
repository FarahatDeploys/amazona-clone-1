import data from "./data";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userSigninReducer } from "./reducers/userReducer";
const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
// const dataReducer = createSlice({
//   name: "datareducers",
//   initialState,
//   reducers: {
//     datareducer: (state, action) => {
//       return data.products;
//     },
//   },
// });
const reducer = combineReducers({
  productList: productListReducer,
  prodcutDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSigninReducer,
});
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
