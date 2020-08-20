import React, { useRef, useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
//import notify from "../lib/notify";
export default function AddTodo() {
  const title = useRef();
  const { addTodo } = useContext(GlobalContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title.current.value)
    const todo = title.current.value;
    if (todo === null || todo === undefined || todo === "") return;
    addTodo(title.current.value);
    //notify("Todo added succesfully...")
    title.current.value = null;
  };
  return (
    <div className="task">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={title} placeholder="Title" />
        <button>Add todo</button>
      </form>
    </div>
  );
}
