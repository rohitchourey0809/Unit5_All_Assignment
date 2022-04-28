// import {switch} from "react";
// import { TODO_ADD } from "../actions/action1";
const initialdata = {
  list: [],
};

// const [list, setlist] = useState([]);

export const Todoreducer = (state = initialdata, action) => {
  switch (action.type) {
    case "TODO_ADD":
      const { id, data } = action.payload;

      return {
        ...state,
        data: [...state.list, { id: id, data: data }],
      };
    default:
    return state;
  }
};
