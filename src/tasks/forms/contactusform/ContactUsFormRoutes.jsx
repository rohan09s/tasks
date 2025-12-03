import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectLayout from '../../../layout/ProjectLayout'
import ContactUsForm from './ContactForm'

const ContactUsFormRoutes = () => {
  return (
    <Routes>
        <Route element={<ProjectLayout />}>
            <Route path='/' element={<ContactUsForm />} />
        </Route>
    </Routes>
  )
}

export default ContactUsFormRoutes
