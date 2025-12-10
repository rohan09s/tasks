import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

function Topics() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const projectsByCategory = {
    props_callback: [
      { name: "Todo App", path: "todo" },
      { name: "SetBgPhoto App", path: "setphoto" },
    ],
    cards: [
      { name: "Simple Card", path: "simplecard" },
      { name: "Pricing Card", path: "pricingcard" },
    ],
    forms: [
      { name: "User Form", path: "userform" },
      { name: "Contact Form", path: "contactusform" },
    ],
    context: [
      { name: "Theme Context", path: "theme_context" },
      { name: "Resume Builder  Context", path: "resumeBuilderContext" },
    ],
    hooks: [
      { name: "useState for Counter(values)", path: "useStateCounter"},
      { name: "useState for Text", path: "useStateText"},
      { name: "useState for Object", path: "useStateObject"},
      { name: "useEffect for Counter(values)", path: "useEffectCounter"},
      { name: "useEffect Clean-up Function", path: "useEffectCleanUp"},
      { name: "useContext Login", path: "loginContext"},
      { name: "useRef Mutable Element", path: "useRefMutable"},
      { name: "useRef Accessing DOM", path: "useRefAccessDOM"},
      { name: "useReducer Counter", path: "useReducerCounter"},
      { name: "useLayout Toggle", path: "useLayoutEffect"},
      { name: "useLayout Common Example", path: "useLayoutCommonCase"},
      { name: "useMemo Input", path: "useMemoInput"},
      { name: "useInput Number Table", path: "useCallbackNumTable"},
    ],
    navbar: [
      { name: "Round Navbar", path: "roundNavbar"},
    ],
    solar: [
      { name: "Solar System", path: 'solarSystem'}
    ]
  };

  const projects = projectsByCategory[categoryName] || [];

  return (
    <AppLayout>
      <button
        onClick={() => navigate(-1)}
        style={{marginBottom: "20px", padding: "6px 12px", borderRadius: "6px", border: "1px solid #ccc", cursor: "pointer"}}
      >
        ⬅ Back
      </button>

      <h2 style={{ marginBottom: "20px" }}>
        Topic: {categoryName.replace("_", " ").toUpperCase()}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {projects.map((project) => (
          <div
            key={project.path}
            onClick={() => navigate(`/tasks/${categoryName}/${project.path}`)}
            style={{padding: "18px", borderRadius: "10px", border: "1px solid #ddd", cursor: "pointer", fontWeight: "bold", background: "#f9f9f9", transition: "all 0.2s"}}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#e9f1ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#f9f9f9")
            }
          >
            {project.name}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Topics;