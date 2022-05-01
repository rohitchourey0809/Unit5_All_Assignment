import { reducer } from "./reducer";

import { legacy_createStore as createStore } from "redux";

const initialState = {
  counter: 0,
  todos: [],
};

const store = createStore(reducer, initialState);

console.log("initialstate", store.getState());

store.dispatch({ type: ADD_COUNT, payload: 1 });

console.log("After dispatch", store.getState());

store.dispatch(addtodo("Learn Redux"));

console.log("After dispatch", store.getState());

store.dispatch(addtodo("Learn TypeScript"));

console.log("AfterDispatch", store.getState());
