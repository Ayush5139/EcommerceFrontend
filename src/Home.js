import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import FeaturedItems from './FeaturedItems'
import Footer from './Footer'
import MainPage from './MainPage'
import Nav from './Nav'
import './Signup.css'
import img from './iSHOP Logo.jpg'
import cartImg from './bag_icon.jpg'
import pofileImg from './profile_icon.jpg'

function Home() {
  const [loginTab, setLoginTab] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [userID, setUserID] = useState("")
  const [response, setResponse] = useState()
  const [loggedIn, setLoggedin] = useState(true)
  const [count, setCount] = useState(0)
  const [carData, setCartdata] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    axios.get("https://ecommercebackend-4lkz.onrender.com/otherCartData")
      .then((res) => setCartdata(res.data))
  }, [count])
  console.log(carData[0])
  useEffect(() => {
    setItemCount(carData[0])
    setTotalPrice(carData[1])
  }, [carData])
  console.log(totalPrice)
  useEffect(() => {
    if (sessionStorage.getItem("USER") != "") {
      setLoginTab(true)
      setLoggedin(false)
    }
    if (sessionStorage.getItem("USER") == "" || sessionStorage.getItem("USER") == null) {
      setLoggedin(true)
      setLoginTab(true)
    }
    // let allEle = document.getElementsByTagName("*");
    // console.log(allEle);
    // for (let i = 0; i < allEle.length; i++) {
    //   if (allEle[i].offsetWidth > 480 && allEle[i].offsetWidth < 1470) {
    //     console.log(allEle[i]);
    //   }
    // }
  }, [count])

  function abc123() {
    setLoginTab(false)
  }

  async function onSubmit() {
    const newObj = {
      email: email,
      password: password
    }
    await axios.post('https://ecommercebackend-4lkz.onrender.com/login', { data: newObj })
      .then((res) => {
        setResponse(res); console.log(res);
        if (res.data.msg == "User has logged in successfully") {
          sessionStorage.setItem("USER", res.data.userID)
          setLoginTab(true)
        }
      })
    console.log("user", sessionStorage.getItem("USER"));
    setCount(count - 1)
  }

  function logout() {
    sessionStorage.setItem("USER", "")
    setCount(count + 1)
  }

  // if (sessionStorage.getItem("sign") === "true") {
  //   document.querySelector(".timedoutdiv").style.display = "block"
  //   setTimeout(() => {
  //     document.querySelector(".timedoutdiv").style.display = "none"
  //   }, 10000)
  //   sessionStorage.setItem("sign", "")
  // }

  useEffect(() => {
    if (sessionStorage.getItem("sign") === "true") {
      console.log("signup sucessful")
      document.querySelector(".timedoutdiv").style.display = "block"
      setTimeout(() => {
        document.querySelector(".timedoutdiv").style.display = "none"
      }, 8000)
      sessionStorage.setItem("sign", "")
      console.log("signup sucessful 2")
    }
  }, [])
  const [userName, setUsernam] = useState("")
  const userId = sessionStorage.getItem("USER")
  useEffect(() => {
    axios.get(`https://ecommercebackend-4lkz.onrender.com/${userId}`)
      .then((res) => setUsernam(res.data[0].username))
  }, [carData])
  return (
    <div>
      <div className='timedoutdiv'><p>Signup Successful</p></div>

      {(loginTab) ?
        <div>{(loggedIn) ?
          <div className='homediv1'>
            <button onClick={abc123} className='loginbtn2'>Login</button></div> : <div>
            <div className='p2'>
              <p className='navp1'> <img src={pofileImg} /> Hello. {userName}
                <ul>
                  <li onClick={logout} className="logoutbtn">Logout</li>
                </ul>
              </p>
              <Link to="/cart" className='linktt'><p className='navcart1'> <img src={cartImg} /> {itemCount} items {(totalPrice)}</p></Link>
            </div>
          </div>}
          <Nav />
          <MainPage />
          <Banner />
          <FeaturedItems />
          <Footer />
        </div>
        :
        <div>
          <Nav />
          <div className='signUpdiv1'>
            <div>
              <img src={img} className='loginImg' />
              <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} className='signupInp' />
              <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} className='signupInp' />
              <p>{message}</p>
              <button onClick={onSubmit} className='loginbtn1'>Login</button>
              <Link to={"/user/signup"} className='linktt'><button className='signupbtn1'>Sign Up</button></Link>
            </div>
          </div>
          <Footer />
        </div>
      }
    </div>
  )
}

export default Home