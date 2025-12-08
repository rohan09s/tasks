// import React from 'react'
// import { SiSaturn } from "react-icons/si";

// const Navbar = () => {
//   return (
//     <div style={{width: 'fit-content'}}>
      
//       <div style={{width: '600px', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderRadius: '35px', color: 'white', background: 'black', padding: 8}}>
        
//         {/* for Saturn Logo */}
//         <div >
//             <h1 style={{color: 'black', background: 'white', borderRadius: '50%', fontSize: '25px', padding: '8px'}}><SiSaturn /></h1>
//         </div>

//         {/* for Navigate Options */}
//         <div style={{display: 'flex', justifyContent: 'space-around', gap: '15px'}}>
//             <h1>Work</h1>
//             <h1>About</h1>
//             <h1>Playground</h1>
//             <h1>Resource</h1>
//         </div>

//         {/* for Email Field */}
//         <div>
//             <h1 style={{color: 'black', background: 'white', padding: 8, borderRadius: '30px'}}>rohan123@gmail.com</h1>
//         </div>
//       </div>
    
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { SiSaturn } from "react-icons/si";

const RoundNavbar = () => {
  return (
    <div style={{ width: 'fit-content' }}>
      
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          borderRadius: '40px',
          color: 'white',
          background: 'black',
          padding: '6px 10px'
        }}
      >
        
        {/* Saturn Logo */}
        <div>
          <div
            style={{
              background: 'white',
              borderRadius: '50%',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <SiSaturn style={{ color: 'black', fontSize: '20px' }} />
          </div>
        </div>

        {/* Navigation Options */}
        <div
          style={{
            display: 'flex',
            gap: '14px'
          }}
        >
          {['Work', 'About', 'Playground', 'Resource'].map(item => (
            <span
              key={item}
              style={{
                margin: 0,
                fontSize: '16px',
                fontWeight: 500
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Email */}
        <div
          style={{
            background: 'white',
            color: 'black',
            padding: '8px 14px',
            borderRadius: '30px',
            fontSize: '15px',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}
        >
          rohan123@gmail.com
        </div>

      </div>
    
    </div>
  )
}

export default RoundNavbar;