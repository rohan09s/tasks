import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import Topics from "../layout/Topics";
import TodoRoutes from "../tasks/props_callback/todo/ToDoRoutes";
import SetPhotoRoutes from "../tasks/props_callback/setbgphoto/SetPhotoRoutes";
import UserFormRoutes from "../tasks/forms/userform/UserFormRoutes";
import PricingCardRoutes from "../tasks/cards/pricingcard/PricingCardRoutes";
import SimpleCardRoutes from "../tasks/cards/simplecard/SimpleCardRoutes";
import ContactUsFormRoutes from "../tasks/forms/contactusform/ContactUsFormRoutes";

function PublicRoutes() {
  return (
    <Routes>
      {/* For Home Page */}
      <Route path="/" element={<Home />} />

      {/* For topics and the projects in it */}
      <Route path="/tasks/:categoryName" element={<Topics />} />

      {/* For projects */}
      <Route path="/tasks/props_callback/todo/*" element={<TodoRoutes />} />
      <Route path="/tasks/props_callback/setphoto/*" element={<SetPhotoRoutes />} />
      <Route path="/tasks/cards/simplecard/*" element={<SimpleCardRoutes />} />
      <Route path="/tasks/cards/pricingcard/*" element={<PricingCardRoutes />} />
      <Route path="/tasks/forms/userform/*" element={<UserFormRoutes />} />
      <Route path="/tasks/forms/contactusform/*" element={<ContactUsFormRoutes />} />
    </Routes>
  );
}

export default PublicRoutes;