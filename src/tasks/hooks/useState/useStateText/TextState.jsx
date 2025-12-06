import React, { useState } from 'react'

const TextState = () => {

  const [name, setName] = useState("");
  // const [name, setName] = useState("Rohan");
  return (
    <div>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} style={{outline: 'none', border: '1px solid #3e3c3cff', borderRadius: '5px'}} />

      <h1>Name: {name}</h1>
    </div>
  )
}

export default TextState
