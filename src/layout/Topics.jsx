import { useParams, useNavigate } from "react-router-dom";

function Topics() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const projectsByCategory = {
    props_callback: [
      { name: "Todo App", path: "todo" },
      { name: "SetPhoto App", path: "setphoto" },
    ],
  };

  const projects = projectsByCategory[categoryName] || [];

  return (
    <div style={{ padding: 30 }}>
      <h1>Topic: {categoryName}</h1>
      <button onClick={() => navigate("/")}>⬅ Back to Home</button>
      <div style={{ marginTop: 20 }}>
        {projects.map((project) => (
          <div
            key={project.path}
            onClick={() => navigate(`/tasks/${categoryName}/${project.path}`)}
            style={{
              padding: "15px 25px",
              border: "1px solid black",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;