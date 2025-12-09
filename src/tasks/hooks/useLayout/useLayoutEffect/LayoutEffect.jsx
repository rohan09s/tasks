import React, { useEffect, useLayoutEffect, useState } from 'react'

const LayoutEffect = () => {

    const [toggle, setToggle] = useState(false);

    
    useEffect(()=> {
        console.log("useEffect");
    }, [toggle])
    
    useLayoutEffect(()=> {
        console.log("useLayoutEffect");
    }, [toggle])

    return (
    <div>
      <button onClick={()=> setToggle(!toggle)} style={{border: '1px solid black', margin: 5, padding: 3, borderRadius: 5}}>Toggle</button>
      {
        toggle && <h4>React JS</h4>
      }
    </div>
  )
}

export default LayoutEffect
