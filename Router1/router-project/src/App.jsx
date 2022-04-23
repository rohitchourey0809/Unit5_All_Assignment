import { useState } from "react";
// import React, { useState } from "react";;
// import logo from './logo.svg'
import "./App.css";
import AddTodo from "./Components/AddTodo";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";

function App() {
  const onDelete = (todo) => {
    let index = todos.indexOf(todo);
    todos.splice(index, 1);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, settodos] = useState([
    {
      sno: "1",
      title: "first",
      desc: "firstdesc",
    },
    {
      sno: "2",
      title: "second",
      desc: "seconddesc",
    },
    {
      sno: "3",
      title: "third",
      desc: "thirddesc",
    },
  ]);

  const addtodo = (title, desc) => {
    console.log("I am adding", todo, title, desc);
    let sno = todos[todo.length - 1].sno + 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    console.log(mytodo);

    // return e !== todo;
  };
  return (
    <div className="App">
      <Header title="MyRouterTodo" searchbar={true} />
      <AddTodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
