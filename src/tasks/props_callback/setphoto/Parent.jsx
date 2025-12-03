import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [bgPhoto, setBgPhoto] = useState("");

  const handleBgPhotoChange = (newPhoto) => {
    setBgPhoto(newPhoto);
  };

  return (
    <div>
      <div style={{width: 100, height: 100, border: "1px solid black", backgroundImage: `url(${bgPhoto})`, backgroundSize: "cover", backgroundPosition: "center"
        }}
      ></div>

      <Child onPhotoChange={handleBgPhotoChange} />
    </div>
  );
};

export default Parent;