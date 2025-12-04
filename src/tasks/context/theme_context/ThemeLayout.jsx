// import React, { useContext } from 'react'
// import { ThemeContext } from './ThemeProvide';

// const ThemeLayout = () => {

//     const {theme} = useContext(ThemeContext);

//   return (
//     <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
//       <p style={{color:theme==="light"?"black":"white"}}>This is {theme} theme.</p>  
//     </div>
//   )
// }

// export default ThemeLayout;








import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvide';

const ThemeLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: theme === "light" ? "black" : "white", fontSize: 20 }}>
        This is {theme} theme.
      </p>
    </div>
  );
};

export default ThemeLayout;