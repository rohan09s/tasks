import React, { useState } from 'react'

const MutableVar = () => {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e)=> setName(e.target.value)} style={{border: '1px solid black'}} />
        <h3>Name: {name}</h3> 
    </div>
  )
}

export default MutableVar
