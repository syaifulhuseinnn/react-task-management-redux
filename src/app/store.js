import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../features/notes/reducers/NotesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  notesReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
