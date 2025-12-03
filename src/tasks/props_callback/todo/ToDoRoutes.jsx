import { Routes, Route } from "react-router-dom";
import TodoHome from "./ToDoHome";
import ProjectLayout from "../../../layout/ProjectLayout";

function TodoRoutes() {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path="/" element={<TodoHome />} />
      </Route>
    </Routes>
  );
}

export default TodoRoutes;