import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PricingCardHome from './PricingCardHome'
import ProjectLayout from '../../../layout/ProjectLayout'

const PricingCardRoutes = () => {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path='/' element={<PricingCardHome />} />
      </Route>        
    </Routes>
  )
}

export default PricingCardRoutes
