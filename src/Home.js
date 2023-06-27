import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import FeaturedItems from './FeaturedItems'
import Footer from './Footer'
import Login from './Login'
import MainPage from './MainPage'
import Nav from './Nav'
import './Signup.css'
import img from'./iSHOP Logo.jpg'

function Home() {
  const [loginTab,setLoginTab] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const [userID,setUserID] = useState("")
  const [response,setResponse] = useState()
  const [loggedIn,setLoggedin] = useState(true)
  const [count,setCount] = useState(0)

  useEffect(()=>{
    if(sessionStorage.getItem("USER") != ""){
      setLoginTab(true)
      setLoggedin(false)
    }
    else{
      setLoggedin(true)
      setLoginTab(true)
    }
  },[count])

  function abc123(){
    setLoginTab(false)
  }

async function onSubmit(){
      const newObj = {
          email:email,
          password:password
      }
      await axios.post('https://ecommercebackend-4lkz.onrender.com/login',{data:newObj})
      .then((res)=>{setResponse(res);console.log(res);
        if(res.data.msg=="User has logged in successfully"){
          sessionStorage.setItem("USER",res.data.userID)
          setLoginTab(true)
        }
      })
      console.log("user",sessionStorage.getItem("USER"));
      setCount(count-1)
    }

    function logout(){
      sessionStorage.setItem("USER","")
      setCount(count+1)
    }
  return (
    <div>
      {(loginTab) ? 
      <div>{(loggedIn)?
            <div className='homediv1'>
              <button onClick={abc123} className='loginbtn2'>Login</button>
              <Link to={"/user/signup"} style={{ textDecoration: "none" }}><button className='signupbtn2'>Sign Up</button></Link></div>:<div><button className='logoutbtn' onClick={logout}>Logout</button></div>}
        <Nav data={loggedIn}/>
        <MainPage/>
        <Banner/>
        <FeaturedItems/>
        <Footer/>
      </div>
      :
      <div className='signUpdiv1'>
        <div>
        <img src={img} className='loginImg'/>
        <input type="text" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} className = 'signupInp'/>
        <input type="password" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} className = 'signupInp'/>
        <p>{message}</p>
        <button onClick={onSubmit} className = 'loginbtn1'>Login</button>
        <hr className='hr1'></hr>
        <Link to={"/user/signup"} className='linktt'><button className='signupbtn1'>Sign Up</button></Link>
        </div>
      </div>
      }
    </div>
  )
}

export default Home