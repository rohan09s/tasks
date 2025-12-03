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