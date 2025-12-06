import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    }

    const decrement = ()=> {
        setCount(count - 1);
    }

    const reset = ()=> {
        setCount(0);
    }

  return (
    <div style={{justifyContent: 'center', textAlign: 'center'}}>
      <p>Current count: {count}</p>

      <button onClick={()=> {increment()}} style={{border: '1px solid #121111ff', borderRadius: '5px', margin: '8px', padding: '5px'}}>Add</button>
      <button onClick={()=> {decrement()}} style={{border: '1px solid #121111ff', borderRadius: '5px', margin: '8px', padding: '5px'}}>Subtract</button>
      <button onClick={()=> {reset()}} style={{border: '1px solid #121111ff', borderRadius: '5px', margin: '8px', padding: '5px'}}>Resest</button>
    </div>
  )
}

export default Counter
