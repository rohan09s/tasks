import React, { createContext } from 'react'
import Login from './Login'

export const LoginContext = createContext();

const LoginHome = () => {
  return (
    <LoginContext.Provider value={true}>
      <Login />
    </LoginContext.Provider>
  )
}

export default LoginHome
