import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Signup.css'
import img from './iSHOP Logo.jpg'
import Nav from './Nav'
import Footer from './Footer'


function Signup() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState()
  const [age, setAge] = useState()
  console.log(email)
  console.log(username)
  function onSubmit() {
    const newObj = {
      email: email,
      username: username,
      password: password,
    }
    axios.post('https://ecommercebackend-4lkz.onrender.com/signup', { data: newObj })
      .then((res) => {setMessage(res.data.message);
        if(res.data.message=="User Registered"){
          window.location.href = "http://localhost:3000/";
          sessionStorage.setItem("sign","true")
        }
      })
  }
  return (
    <div>
      <Nav/>
      <div className='signUpdiv1'>
        <div>
          <img src={img} className='sognupImg' />
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='signupInp' />
          <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} className='signupInp' />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='signupInp' />
          <input type="Number" placeholder='Age' onChange={(e) => setAge(e.target.value)} className='signupInp' />
          <input type="Number" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} className='signupInp' />
          <p>{message}</p>
          <button onClick={onSubmit} className='loginbtn1'>Sign Up</button>
          <Link to={"/"} className='linktt'><button className='signupbtn1'><p className='homep1'>Home</p> <FaArrowRight /></button></Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup