import React, { useState } from 'react'

const Child = ({ onPhotoChange }) => {
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];   // ✅ real file object
    if (file) {
      const url = URL.createObjectURL(file); // ✅ browser usable image URL
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

export default Child;