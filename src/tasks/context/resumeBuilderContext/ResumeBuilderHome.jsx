import React from 'react'
import ResumeBilderInput from './ResumeBuilderInput'
import ResumeBuilderProvider from './ResumeBuilderProvider'

const ResumeBuilderHome = () => {
  return (
    <ResumeBuilderProvider>
        <ResumeBilderInput />
    </ResumeBuilderProvider>
    
  )
}

export default ResumeBuilderHome
