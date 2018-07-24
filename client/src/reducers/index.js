"use strict";
import { combineReducers } from "redux";
//Here import reducers to be combined
import bookReducers from "./bookReducers";
import cartReducers from "./cartReducers";
//Here combine the imported reducers
export default combineReducers({
  books: bookReducers,
  cart: cartReducers
});
