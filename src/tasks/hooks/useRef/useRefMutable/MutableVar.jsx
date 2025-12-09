import React, { useEffect, useRef, useState } from 'react'

const MutableVar = () => {

    const [name, setName] = useState("");
    // useRef(0);
    const count = useRef(0);
    
    console.log(count);

    useEffect(()=> {
        count.current = count.current + 1;
    })




//     const [count, setCount] = useState(0);

//     useEffect(()=> {
//         setCount((prev)=> prev + 1);
//      })

  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e)=> setName(e.target.value)} style={{border: '1px solid black'}} />
        <h3>Name: {name}</h3>
        <h2>Renders: {count.current}</h2>
    </div>
  )
}

export default MutableVar
