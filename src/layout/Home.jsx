import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Props & Callback", path: "props_callback" },
    // { name: "State", path: "state" },
    // { name: "Hooks", path: "hooks" },
  ];

  return (
    <div style={{ padding: "30px", justifyContent: 'center'}}>

      <h1>All Topics</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <div key={cat.path} onClick={() => navigate(`/tasks/${cat.path}`)}
            style={{padding: "20px 30px", border: "1px solid black", borderRadius: "8px", cursor: "pointer"}}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
