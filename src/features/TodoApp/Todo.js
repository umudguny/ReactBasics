import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);

  const HandledeleteTodo = (todoToDelete) => {
    dispatch(deleteTodo(todoToDelete));
    console.log(todos);
  };
  const handleTodoList = () => {
    if (todo.trim() !== "") {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };
  return (
    <>
      <h1>Todo Creator</h1>
      <input
        className="todoCreator"
        placeholder="Please Write your next todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="addTodo" onClick={handleTodoList}>
        Add
      </button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => HandledeleteTodo(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
