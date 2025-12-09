import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutCase = () => {

    const [toggle, setToggle] = useState(false);
    const textRef = useRef();
    
        
    // useEffect(()=> {
    //     if (textRef.current != null) {
    //         const dimension = textRef.current.getBoundingClientRect();
            
    //         textRef.current.style.paddingTop = "30px"
    //         console.log(dimension);  
    //     }
    // }, [toggle])


    useLayoutEffect(()=> {
        if (textRef.current != null) {
            const dimension = textRef.current.getBoundingClientRect();
            
            textRef.current.style.paddingTop = "30px"
            console.log(dimension);  
        }
    }, [toggle])
        
    // useLayoutEffect(()=> {
    //     console.log("useLayoutEffect");
    // }, [toggle])

  return (
    <div>
      <button onClick={()=> setToggle(!toggle)} style={{border: '1px solid black', margin: 5, padding: 3, borderRadius: 5}}>Toggle</button>
      {
        toggle && <h4 ref={textRef}>React JS</h4>
      }
    </div>
  )
}

export default UseLayoutCase
