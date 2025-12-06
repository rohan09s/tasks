import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5)

  // useEffect without dependencies :
  // useEffect(()=> {
  //   document.title = `${count} new messages`;
  // })

  // useEffect without dependencies :
  // useEffect(()=> {
  //   document.title = `${count} new messages`;
  // }, [])

  // useaEFfect with variable/dependency variable
  useEffect(()=> {
    document.title = `${otherCount} new messages`;
  }, [otherCount])

  return (
    <div>
      <h3>{count} NEW MESSAGES</h3>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <br />
      <h3>{otherCount} New Messages!</h3>
      <button onClick={()=> setOtherCount(otherCount + 5)}>Increase Other Count</button>
    </div>
  )
}

export default CounterEffect
