import React from "react";
import TodoItems from "./ToDoItems";

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  if (tasks.length === 0) return <p>No tasks added yet.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TodoItems key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;