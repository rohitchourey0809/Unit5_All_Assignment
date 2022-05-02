import { createStore } from "redux";
import { rootReducer } from "./index1";

export const store = createStore(
  rootReducer,
  REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
