import React, { useState } from 'react'
import Child from './SetPhotoChild'

const SetPhotoParent = () => {
  const [bgPhoto, setBgPhoto] = useState("");

  const handleBgPhotoChange = (newPhoto) => {
    setBgPhoto(newPhoto);
  };

  const deletePhoto = ()=> {
    setBgPhoto("")
  }

  return (
    <div>
      <div style={{width: 100, height: 100, border: "1px solid black", backgroundImage: `url(${bgPhoto})`, backgroundSize: "cover", backgroundPosition: "center"
        }}
      >
        {/* Add background photo */}
        {!bgPhoto &&
          (<p>Add background photo</p>)
        }
      </div>

      { bgPhoto && ( 
          <button onClick={deletePhoto}
                  style={{marginTop: "10px", background: "red", color: "white", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer"}}
          >
            Delete Photo
          </button> )
      }

      <Child onPhotoChange={handleBgPhotoChange} />
    </div>
  );
};

export default SetPhotoParent;