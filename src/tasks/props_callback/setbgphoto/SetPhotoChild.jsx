import React, { useState } from 'react'

const SetPhotoChild = ({ onPhotoChange }) => {
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
      onPhotoChange(url);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default SetPhotoChild;