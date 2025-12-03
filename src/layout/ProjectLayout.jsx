import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProjectLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f5f7fa", padding: "30px 20px", boxSizing: "border-box", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "700px", background: "#ffffff", padding: "30px", borderRadius: "14px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
        
        <button
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px", padding: "8px 14px", borderRadius: "8px", border: "1px solid #ccc", cursor: "pointer", background: "#f2f2f2", fontWeight: "600" }}
        >
          ⬅ Back
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default ProjectLayout;