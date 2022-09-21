import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { MovieManagerReducer } from "./reducers/MovieManagerReducer";

const rootReducer = combineReducers({
  // State ứng dụng
  MovieManagerReducer,
  // UserManagerReduver,
});

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
