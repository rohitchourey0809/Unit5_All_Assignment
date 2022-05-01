const reducer = (store, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...store, counter: store.couter + action.payload };

    case ADD_TODO:
      return { ...store, todos: [...(store.todos + action.payload)] };

    default:
      return store;
  }
};

export {reducer};
