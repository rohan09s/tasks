import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvide";
import ThemeLayout from "./ThemeLayout";

const ThemeHome = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // One-line button style function
  const btnStyle = (isActive) => ({
    padding: "10px 20px",
    cursor: "pointer",
    background: isActive ? "#4CAF50" : theme === "light" ? "#000" : "#fff", // green if active
    color: isActive ? "#fff" : theme === "light" ? "#fff" : "#000",
    border: "2px solid white",
    borderRadius: 5,
    fontWeight: "bold",
    minWidth: 80,
  });

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", gap: 15 }}>
        <button
          onClick={() => setTheme("dark")}
          style={btnStyle(theme === "dark")}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("light")}
          style={btnStyle(theme === "light")}
        >
          Light
        </button>
      </div>

      <p style={{ color: theme === "light" ? "black" : "white", fontSize: 20 }}>
        This is {theme} theme.
      </p>

      {/* <ThemeLayout /> */}
    </div>
  );
};

export default ThemeHome;






// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeProvide";
// import ThemeLayout from "./ThemeLayout";

// const ThemeHome = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   // Simple one-line style for buttons
//   const btnStyle = (bgColor, textColor) => ({
//     padding: "10px 20px",
//     cursor: "pointer",
//     background: bgColor,
//     color: textColor,
//     border: "2px solid white",
//     borderRadius: 5,
//     fontWeight: "bold",
//     minWidth: 80,
//   });

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#000",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 20,
//       }}
//     >
//       <div style={{ display: "flex", gap: 15 }}>
//         <button
//           onClick={() => setTheme("dark")}
//           style={btnStyle(theme === "light" ? "#000" : "#fff", theme === "light" ? "#fff" : "#000")}
//         >
//           Dark
//         </button>
//         <button
//           onClick={() => setTheme("light")}
//           style={btnStyle(theme === "light" ? "#000" : "#fff", theme === "light" ? "#fff" : "#000")}
//         >
//           Light
//         </button>
//       </div>

//       <ThemeLayout />
//     </div>
//   );
// };

// export default ThemeHome;








// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeProvide";
// import ThemeLayout from "./ThemeLayout";

// const ThemeHome = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   // Simple one-line button style function
//   const btnStyle = {
//     padding: 10,
//     cursor: "pointer",
//     background: theme === "light" ? "#000" : "#fff",
//     color: theme === "light" ? "#fff" : "#000",
//     border: "1px solid",
//     borderRadius: 5,
//   };

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#000",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 20,
//       }}
//     >
//       <div style={{ display: "flex", gap: 10 }}>
//         <button onClick={() => setTheme("dark")} style={btnStyle}>
//           Dark
//         </button>
//         <button onClick={() => setTheme("light")} style={btnStyle}>
//           Light
//         </button>
//       </div>

//       <ThemeLayout />
//     </div>
//   );
// };

// export default ThemeHome;







// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeProvide";
// import ThemeLayout from "./ThemeLayout";

// const ThemeHome = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "white" : "black",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//       }}
//     >
//       <div style={{ display: "flex", gap: "10px" }}>
//         <button
//           onClick={() => setTheme("dark")}
//           style={{ padding: 10, cursor: "pointer", background: theme === "light" ? "#333" : "#ddd", color: theme === "light" ? "#fff" : "#000", border: "none", borderRadius: 5 }}
//         >
//           Dark
//         </button>
//         <button
//           onClick={() => setTheme("light")}
//           style={{ padding: 10, cursor: "pointer", background: theme === "light" ? "#333" : "#ddd", color: theme === "light" ? "#fff" : "#000", border: "none", borderRadius: 5 }}
//         >
//           Light
//         </button>
//       </div>
//       <ThemeLayout />
//     </div>
//   );
// };

// export default ThemeHome;





// import React, { useContext } from "react";
// import  { ThemeContext } from "./ThemeProvide";
// import ThemeLayout from "./ThemeLayout";

// const ThemeHome = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleTheme = (newTheme) => {
//     setTheme(newTheme);
//   };
//   return (
//       <div  style={{background:theme==="light"?"white":"black",height:"100vh"}}>
//         <button onClick={() => handleTheme("dark")}>Dark</button>
//         <button onClick={() => handleTheme("light")}>Light</button>
//         <ThemeLayout/>
//       </div>
//   );
// };

// export default ThemeHome;