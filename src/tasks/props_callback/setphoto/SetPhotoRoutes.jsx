import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SetPhotoHome from './SetPhotoHome'

const SetPhotoRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SetPhotoHome />} />
    </Routes>
  )
}

export default SetPhotoRoutes
