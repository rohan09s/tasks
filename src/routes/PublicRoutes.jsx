import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import Topics from "../layout/Topics";
// import TodoRoutes from "../tasks/props_callback/todo/ToDoRoutes";
// import SetPhotoRoutes from "../tasks/props_callback/setbgphoto/SetPhotoRoutes";
// import UserFormRoutes from "../tasks/forms/userform/UserFormRoutes";
// import PricingCardRoutes from "../tasks/cards/pricingcard/PricingCardRoutes";
// import SimpleCardRoutes from "../tasks/cards/simplecard/SimpleCardRoutes";
// import ContactUsFormRoutes from "../tasks/forms/contactusform/ContactUsFormRoutes";
// import ThemeRoutes from "../tasks/context/theme_context/ThemeRoutes";
// import ThemeLayout from "../tasks/context/theme_context/ThemeLayout";
import ToDoHome from "../tasks/props_callback/todo/ToDoHome";
import SetPhotoHome from "../tasks/props_callback/setbgphoto/SetPhotoHome";
import SimpleCardHome from "../tasks/cards/simplecard/SimpleCardHome";
import PricingCardHome from "../tasks/cards/pricingcard/PricingCardHome";
import UserFormHome from "../tasks/forms/userform/UserFormHome";
import ContactUsFormHome from "../tasks/forms/contactusform/ContactUsFormHome";
import ThemeHome from "../tasks/context/theme_context/ThemeHome";
import ProjectLayout from "../layout/ProjectLayout";
import CounterHome from "../tasks/hooks/useState/useStateCounter/CounterHome";
import TextStateHome from "../tasks/hooks/useState/useStateText/TextSTateHome";
import ObjectStateHome from "../tasks/hooks/useState/useStateObject/ObjectStateHome";
import CounterEffectHome from "../tasks/hooks/useEffect/useEffectCounter/CounterEffectHome";
import CleanUpHome from "../tasks/hooks/useEffect/useEffectCleanUp/CleanUpHome";
import LoginHome from "../tasks/hooks/useContext/loginContext/LoginHome";
import RoundNavbarHome from "../tasks/navbar/roundNavbar/RoundNavbarHome";
import MutableVarHome from "../tasks/hooks/useRef/useRefMutable/MutableVarHome";
import AccessDOMHome from "../tasks/hooks/useRef/useRefAccessDOM/AccessDOMHome";
import CounterReducerHome from "../tasks/hooks/useReducer/useReducerCounter/CounterReducerHome";
import LayoutEffectHome from "../tasks/hooks/useLayout/useLayoutEffect/LayoutEffectHome";
import UseLayoutCaseHome from "../tasks/hooks/useLayout/useLayoutCommonCase/UseLayoutCaseHome";
import InputMemoHome from "../tasks/hooks/useMemo/useMemoInput/InputMemoHome";
import SolarHome from "../tasks/solar/solarSystem/SolarHome";

function PublicRoutes() {
  return (
    <Routes>
      
      {/* For Home Page */}
      <Route path="/" element={<Home />} />

      {/* For topics and the projects in it */}
      <Route path="/tasks/:categoryName" element={<Topics />} />

      {/* For projects */}
      <Route element={<ProjectLayout />}>
          <Route path="/tasks/props_callback/todo/*" element={<ToDoHome />} />
          {/* <Route path="/tasks/props_callback/todo/*" element={<TodoRoutes />} /> */}
          <Route path="/tasks/props_callback/setphoto/*" element={<SetPhotoHome />} />
          {/* <Route path="/tasks/props_callback/setphoto/*" element={<SetPhotoRoutes />} /> */}
          <Route path="/tasks/cards/simplecard/*" element={<SimpleCardHome />} />
          {/* <Route path="/tasks/cards/simplecard/*" element={<SimpleCardRoutes />} /> */}
          <Route path="/tasks/cards/pricingcard/*" element={<PricingCardHome />} />
          {/* <Route path="/tasks/cards/pricingcard/*" element={<PricingCardRoutes />} /> */}
          <Route path="/tasks/forms/userform/*" element={<UserFormHome />} />
          {/* <Route path="/tasks/forms/userform/*" element={<UserFormRoutes />} /> */}
          <Route path="/tasks/forms/contactusform/*" element={<ContactUsFormHome />} />
          {/* <Route path="/tasks/forms/contactusform/*" element={<ContactUsFormRoutes />} /> */}
          <Route path="/tasks/context/theme_context/*" element={<ThemeHome />} />
          {/* <Route path="/tasks/context/theme_context/*" element={<ThemeRoutes />} /> */}
          <Route path="/tasks/hooks/useStateCounter/*" element={<CounterHome />} />
          <Route path="/tasks/hooks/useStateText/*" element={<TextStateHome />} />
          <Route path="/tasks/hooks/useStateObject/*" element={<ObjectStateHome />} />
          <Route path="/tasks/hooks/useEffectCounter/*" element={<CounterEffectHome />} />
          <Route path="/tasks/hooks/useEffectCleanUp/*" element={<CleanUpHome />} />
          <Route path="/tasks/hooks/loginContext/*" element={<LoginHome />} />
          <Route path="/tasks/hooks/useRefMutable/*" element={<MutableVarHome />} />
          <Route path="/tasks/hooks/useRefAccessDOM/*" element={<AccessDOMHome />} />
          <Route path="/tasks/hooks/useReducerCounter/*" element={<CounterReducerHome />} />
          <Route path="/tasks/hooks/useLayoutEffect/*" element={<LayoutEffectHome />} />
          <Route path="/tasks/hooks/useLayoutCommonCase/*" element={<UseLayoutCaseHome />} />
          <Route path="/tasks/hooks/useMemoInput/*" element={<InputMemoHome />} />
          <Route path="/tasks/navbar/roundNavbar/*" element={<RoundNavbarHome />} />
          <Route path="/tasks/solar/solarSystem/*" element={<SolarHome />} />
      </Route>
    </Routes>

  );
}

export default PublicRoutes;
