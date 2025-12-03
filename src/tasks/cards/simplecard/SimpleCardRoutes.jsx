import React from 'react'
import ProjectLayout from '../../../layout/ProjectLayout'
import CardHome from './SimpleCardHome'
import { Route, Routes } from 'react-router-dom'

const SimpleCardRoutes = () => {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path='/' element={<CardHome />} />
      </Route>        
    </Routes>
  )
}

export default SimpleCardRoutes
