import React, { useRef } from 'react'

const AccessDOM = () => {

    const inputEle = useRef(0);
    
    
    const handleClick = ()=> {
        console.log(inputEle.current);

        inputEle.current.style.width = "300px";

        inputEle.current.focus();
    }

  return (
    <div>
      <input type="text" name="" placeholder='Name' ref={inputEle} style={{border: '1px solid black'}} />
      <br />
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default AccessDOM
