import React, { useContext } from "react";
import { ThemeContext } from "../tasks/context/theme_context/ThemeProvide";

const AppLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const color = theme === "light" ? "white" : "black";
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: color,
        padding: "30px 20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "#ffffff",
          // background: "theme",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
