import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // State ứng dụng
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
