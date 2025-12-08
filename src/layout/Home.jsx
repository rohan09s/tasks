import React from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Props & Callback", path: "props_callback" },
    { name: "Cards", path: "cards" },
    { name: "Forms", path: "forms" },
    { name: "Context API", path: "context" },
    { name: "React Hooks", path: "hooks" },
    { name: "Navbar", path: "navbar" },
  ];

  return (
    <AppLayout>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        📚 Learning Projects
      </h1>

      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        Select a topic to view related projects
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.path}
            onClick={() => navigate(`/tasks/${cat.path}`)}
            style={{padding: "25px", borderRadius: "10px", background: "#007bff", color: "#fff", textAlign: "center", fontWeight: "bold", cursor: "pointer", boxShadow: "0 6px 15px rgba(0,0,0,0.15)", transition: "transform 0.2s"}}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            {cat.name}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Home;