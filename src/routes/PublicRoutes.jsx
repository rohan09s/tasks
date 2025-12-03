import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import Topics from "../layout/Topics";
import TodoRoutes from "../tasks/props_callback/todo/ToDoRoutes";
import SetPhotoRoutes from "../tasks/props_callback/setphoto/SetPhotoRoutes";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks/:categoryName" element={<Topics />} />

      <Route path="/tasks/props_callback/todo/*" element={<TodoRoutes />} />
      <Route path="/tasks/props_callback/setphoto/*" element={<SetPhotoRoutes />} />
    </Routes>
  );
}

export default PublicRoutes;