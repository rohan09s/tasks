import React, { useMemo, useState } from 'react'

const InputMemo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);


    // const calculation = expensiveFunction(number);


    const memoCalculation = useMemo(()=> {
      expensiveFunction(number);
    }, [number])

    const cssStyle = {
        backgroundColor : dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

  return (
    <div style={cssStyle}>
      <input 
          type="number"
          name="number" id=""
          value={number}
          onChange={(e)=> setNumber(e.target.valueAsNumber)}
          style={{outline: '1px solid black', padding: 5}} 
      />

        {/* <h2>Calculation: {calculation}</h2> */}
        <h2>Calculation: {memoCalculation}</h2>

        <button onClick={()=> setDark(!dark)} style={{outline: '1px solid black', backgroundColor: '#ccc', padding: 1, borderRadius: 3}}>Toggle Theme</button>
    </div>
  )
}



function expensiveFunction(num) {
    console.log("Loop Started!");

    for (let i = 0; i < 100; i++) {};

    return num;
}



export default InputMemo