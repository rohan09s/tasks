import React, { useState } from 'react'

const ObjectState = () => {

    const [details, setDetails] = useState({count: 0, name: ""});

    function increaseCount() {
      setDetails((prev)=> ({
        ...prev,
        count: prev.count + 1
      }))
    }

    console.log(details);

  return (
    <div>
      <input type="text" onChange={(e)=> e.target.value} />

      <h1>
        {details.name} has clicked {details.count} times.
      </h1>

      <button onClick={increaseCount}>Add</button>
    </div>
  )
}

export default ObjectState
