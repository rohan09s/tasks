import React from "react";
import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <input type="text" placeholder="Enter a task..." value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleEnter}
      />
      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;