import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import booksReducer from "./books-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

export default rootReducer;
