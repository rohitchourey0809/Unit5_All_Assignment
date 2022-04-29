// import { Button, GridItem, Input, Stack } from "@chakra-ui/react";
// import { useState } from 'react'
// import logo from './logo.svg'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { todoreducer } from "./components/reducers";
import "./App.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleClick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });

  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }
  return (
    <ui>
      {todos.map((todo) => (
        <li onClick={() => handleClick(todo.id)}>{todo.label}</li>
      ))}
    </ui>
  );
};

const Todoinput = () => {
  const dispatch = useDispatch();
  const [newtodo, setnewtodo] = useState();

  const handlechange = (event) => {
    setnewtodo(event.target.value);
  };
  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newtodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
  return (
    <div>
      <input value={newtodo} onChange={handlechange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </div>
  );
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">TodoAppRedux</h2>

        {/* <Stack>
          <Input
            variant="outline"
            placeholder="TodoItem"
            focusBorderColor="pink.400"
            fontSize="x-large"
          />
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
        </Stack> */}
        <p></p>
        <Todos />
        <Todoinput />
      </header>
    </div>
  );
}

export default App;
