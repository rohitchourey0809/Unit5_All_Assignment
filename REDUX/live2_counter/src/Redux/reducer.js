import ADD_COUNT from "./action";

export const counterReducer = () => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, counter: store.counter };
  }
};
