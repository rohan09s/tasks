import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserFormHome from './UserFormHome'
import ProjectLayout from '../../../layout/ProjectLayout'

const UserFormRoutes = () => {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path='/' element={<UserFormHome />} />
      </Route>        
    </Routes>
  )
}

export default UserFormRoutes
