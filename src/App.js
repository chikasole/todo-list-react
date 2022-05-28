import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";


const App = () => {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("");
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <header>To-do List</header>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} setTodo={setTodo} status={status} setStatus={setStatus}/>
      <TodoList setTodo={setTodo} todos={todos} />
    </div>
  );
}

export default App;