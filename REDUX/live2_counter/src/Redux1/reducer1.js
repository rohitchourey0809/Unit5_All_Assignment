const initialState = {
  todos: [],
};

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, time, id } = action.payload;

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: title,
            time: time,
            id: id,
          },
        ],
      };
    default:
      return state;
  }
};
