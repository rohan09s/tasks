// import React, { createContext, useState } from "react";

// export const ThemeContext = createContext();

// const ThemeProvide = ({children}) => {
//   const [theme, setTheme] = useState("light");
//   console.log("Theme:", theme);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvide;





import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  console.log("Theme:", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvide;