import React, { useContext } from 'react'
import { LoginContext } from './LoginHome';

const Login = () => {

  const login = useContext(LoginContext);

  console.log(login);
  
  
  return (
    <div>
      Home
    </div>
  )
}

export default Login
