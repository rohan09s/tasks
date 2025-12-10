import React, { useState } from 'react'
import PrintTable from './PrintTable';

const NumTable = () => {

    const [number, setNumber] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    const cssStyle = {
        backgroundColor : darkTheme ? "black" : "white",
        color : darkTheme ? "white" : "black"
    }

    const calculateTable = ()=> {
        return [number * 1, number * 2, number * 3, number * 4, number * 5, number * 6, number * 7, number * 8, number * 9, number * 10]
    }

  return (
    <div style={cssStyle} className='p-5'>
      <input type="number" name="number"
             onChange={(e)=> setNumber(e.target.valueAsNumber)}
             value={number}
             style={{outline: '1px solid black', marginBottom: 5, padding: 5, background: 'white', color: 'black'}}
      />

      <PrintTable calculateTable={calculateTable} />

      <button onClick={()=> setDarkTheme(!darkTheme)} style={{background: '#ccc', color: 'black', marginTop: 5, border: '1px solid black', borderRadius: 3, padding: 5, fontSize: 12}}>Toggle Theme</button>
    </div>
  )
}

export default NumTable
