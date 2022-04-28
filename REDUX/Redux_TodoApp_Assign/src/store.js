// import { createStore} from "redux";
// import { createreducer } from "./reducers/Todoreducer";
import { createStoreHook } from "react-redux";
import rootreducer from "./reducers/Todoreducer";

export const store = createStoreHook(rootreducer);
