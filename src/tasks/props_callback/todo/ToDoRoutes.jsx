import { Routes, Route } from "react-router-dom";
import TodoHome from "./ToDoHome";

function TodoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodoHome />} />
    </Routes>
  );
}

export default TodoRoutes;