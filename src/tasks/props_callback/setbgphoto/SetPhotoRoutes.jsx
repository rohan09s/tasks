import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SetPhotoHome from './SetPhotoHome'
import ProjectLayout from '../../../layout/ProjectLayout'

const SetPhotoRoutes = () => {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path='/' element={<SetPhotoHome />} />
      </Route>        
    </Routes>
  )
}

export default SetPhotoRoutes
