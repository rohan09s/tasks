// import React, { useState } from 'react'

// const CounterReducer = () => {

//     const [count, setCount] = useState(0);

//     const handleIncrement = ()=> {
//         setCount((prev)=> prev + 1);
//     }

//     const handleDecrement = ()=> {
//         setCount((prev)=> prev - 1);
//     }

//   return (
//     <div style={{width: '146px'}}>
//       <h2 style={{marginBottom: 10, marginTop: 10, textAlign: 'center'}}>Count : {count}</h2>
//       <button type='submit' onClick={handleIncrement} style={{border: '1px solid black', background: '#ccc', padding: 3, borderRadius: 5, marginRight: 5}}>Increase</button>
//       <button type='submit' onClick={handleDecrement} style={{border: '1px solid black', background: '#ccc', padding: 3, borderRadius: 5}}>Decrease</button>
//     </div>
//   )
// }

// export default CounterReducer



import React, { useReducer } from 'react'

const CounterReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = ()=> {
    dispatch({ type: ACTION.INCREASE });
  }

  const decreaseCount = ()=> {
    dispatch({ type: ACTION.DECREASE });
  }


  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default CounterReducer

const ACTION = {
  INCREASE : 'increase',
  DECREASE : 'decrease',
}

const initialState = { count: 0 };

const reducer = (state, action)=> {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count : state.count + 1 }
      
    case ACTION.DECREASE:
      return { count : state.count - 1 }
  
    default:
      return state;
  }
}