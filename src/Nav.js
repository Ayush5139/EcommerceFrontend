import React, { useEffect, useState } from 'react'
import './Nav.css'
import img from './iSHOP Logo.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cartImg from './bag_icon.jpg'
import pofileImg from './profile_icon.jpg'
import searchImg from './search_icon.jpg'
import { Fa500Px, FaAlignCenter, FaAlignJustify, FaAlignRight, FaCross, FaCrosshairs, FaTimes, FaXingSquare } from 'react-icons/fa'
import Submenu from './Submenu'


function Nav(props) {
    const [carData,setCartdata] = useState([])
    const [itemCount,setItemCount] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    const [loggedIn,setLoggedin] = useState()
    useEffect(()=>{
        axios.get("https://ecommercebackend-4lkz.onrender.com/otherCartData")
        .then((res)=>setCartdata(res.data))
    },[])
    console.log(carData[0])
    useEffect(()=>{
        setItemCount(carData[0])
        setTotalPrice(carData[1])
    },[carData])
    console.log(totalPrice)
    const [isplay,setDisplay] = useState("none")
    const [clicked,setClicked] = useState(true)
    function showMenu(){
        setClicked(false)
        setDisplay("block")
    }
    function closeMenu(){
        setClicked(true)
        setDisplay("none")
    }
    const status = props.data
    useEffect(()=>{
        setLoggedin(status)
        console.log("nav",loggedIn)
    },[props])
    const userId = sessionStorage.getItem("USER")
    console.log("nav user",userId)
    const [userName,setUsernam] = useState("")
    useEffect(()=>{
        axios.get(`https://ecommercebackend-4lkz.onrender.com/${userId}`)
        .then((res)=>setUsernam(res.data[0].username))
    },[carData])
    
  return (
    <div>
        <div className='div1'>
            <div className='p1'>
                <select name="lang" className="lang">
                    <option value="EN">EN</option>
                    <option value="HND">HND</option>
                </select>
                <select name="lang" className="mon">
                    <option value="$">$</option>
                    <option value="€">€</option>
                    <option value="£">£</option>
                    <option value="₹">₹</option>
                </select>
            </div>
            { (loggedIn)?
            null:   
            <div className='p2'>
                <p className='navp1'> <img src={pofileImg}/> Hello. {userName}</p>
                <Link to="/cart" className='linktt'><p className='navcart1'> <img src={cartImg}/> {itemCount} items {(totalPrice)}</p></Link>
                <p className='navsearch'><img src={searchImg}/>Search</p>
            </div>
            }
        </div>
        <div>
            <div>
                <div className='showMoreDiv'>
                    <img src={img}/>{ (clicked) ? <button onClick={showMenu} className="showMoreBtn"><FaAlignJustify/></button>:<button onClick={closeMenu} className="showMoreBtn"><FaTimes/></button> }</div>
            <div style={{display:isplay}}>
            <Link to='/' className='linktt'>  <p className='sub-cat'>Home</p> </Link><hr></hr>
                <p>Store</p> <hr></hr>
                <Link to={`/store/men's clothing`} className='linktt'><p>men's clothing</p> </Link> <hr></hr>
                <Link to={`/store/jewelery`} className='linktt'> <p>jewelery</p> </Link><hr></hr>
                <Link to={`/store/electronics`} className='linktt'> <p>electronics</p> </Link><hr></hr>
                <Link to={`/store/women's clothing`} className='linktt'> <p>women's clothing</p> </Link><hr></hr>
            </div>
            </div>
            <div className='div2'>
                <Link to='/' className='linktt'>  <p className='sub-cat'>Home</p> </Link>
                <p className='nav__menu-item'><Link to={"/store"} className = 'linktt'>Store</Link><Submenu/></p>
                <Link to={`/store/men's clothing`} className='linktt'><p>men's clothing</p> </Link>
                <Link to={`/store/jewelery`} className='linktt'> <p>jewelery</p> </Link>
                <Link to={`/store/electronics`} className='linktt'> <p>electronics</p> </Link>
                <Link to={`/store/women's clothing`} className='linktt'> <p>women's clothing</p> </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav
















// <Link to='/' className='linktt'>  <p className='sub-cat'>Home</p> </Link>
// <p className='nav__menu-item'>Store<Submenu/></p>
// <Link to={`/store/men's clothing`} className='linktt'><p>men's clothing</p> </Link>
// <Link to={`/store/jewelery`} className='linktt'> <p>jewelery</p> </Link>
// <Link to={`/store/electronics`} className='linktt'> <p>electronics</p> </Link>
// <Link to={`/store/women's clothing`} className='linktt'> <p>women's clothing</p> </Link>