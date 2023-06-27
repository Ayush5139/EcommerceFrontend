import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Link to={"/user/login"}>Login</Link> 
    </div>
  )
}

export default Login