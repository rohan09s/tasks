import React, { useEffect, useState } from 'react'

const CleanUp = () => {

  const [time, setTime] = useState(0);

  // This will break the state of time variable, i.e. time and setTime. It will unmount but will not stop running.
  // useEffect(()=> {
  //   setInterval(()=> setTime(time + 1))
  // })


  // In this, clearInterval will clean-up the side effect of setInterval.
  useEffect(()=> {
    const timer = setInterval(()=> 
      setTime(time + 1), 1000);

    return()=> {
      clearInterval(timer)
    }
    
  })
  

  return (
    <div>
      <h3>{time} in seconds</h3>
    </div>
  )
}

export default CleanUp
