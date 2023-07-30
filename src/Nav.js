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
    const [carData, setCartdata] = useState([])
    const [itemCount, setItemCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [loggedIn, setLoggedin] = useState(true)
    const [count, setCount] = useState(0)
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
    const [isplay, setDisplay] = useState("none")
    const [clicked, setClicked] = useState(true)
    function showMenu() {
        setClicked(false)
        setDisplay("block")
    }
    function closeMenu() {
        setClicked(true)
        setDisplay("none")
    }
    const status = props.data
    const userId = sessionStorage.getItem("USER")
    console.log("nav user", userId)
    const [userName, setUsernam] = useState("")
    useEffect(() => {
        axios.get(`https://ecommercebackend-4lkz.onrender.com/${userId}`)
            .then((res) => setUsernam(res.data[0].username))
    }, [carData])
    useEffect(() => {
        if (sessionStorage.getItem("USER") != "") {
            setLoggedin(false)
        }
        if (sessionStorage.getItem("USER") == "" || sessionStorage.getItem("USER") == null) {
            setLoggedin(true)
        }
    }, [carData, userId, count])
    function logout() {
        sessionStorage.setItem("USER", "")
        setCount(count + 1)
    }

    return (
        <div>
            <div>
                {/* {(loggedIn) ?
                    null :
                    <div>
                        <div className='p2'>
                            <p className='navp1'> <img src={pofileImg} /> Hello. {userName}
                                <ul>
                                    <li onClick={logout} className="logoutbtn">Logout</li>
                                </ul>
                            </p>
                            <Link to="/cart" className='linktt'><p className='navcart1'> <img src={cartImg} /> {itemCount} items {(totalPrice)}</p></Link>
                        </div>
                    </div>
                } */}
            </div>
            <div>
                <div>
                    <div className='showMoreDiv'>
                        <img src={img} />{(clicked) ? <button onClick={showMenu} className="showMoreBtn"><FaAlignJustify /></button> : <button onClick={closeMenu} className="showMoreBtn"><FaTimes /></button>}</div>
                    <div style={{ display: isplay }}>
                        <p>{(loggedIn) ?
                            null :
                            <div>
                                <div className='p2'>
                                    <p className='navp1'> <img src={pofileImg} /> Hello. {userName}
                                        <ul>
                                            <li onClick={logout} className="logoutbtn">Logout</li>
                                        </ul>
                                    </p>
                                    <Link to="/cart" className='linktt'><p className='navcart1'> <img src={cartImg} /> {itemCount} items {(totalPrice)}</p></Link>
                                </div>
                            </div>
                        }</p><hr></hr>
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
                    <p className='nav__menu-item'><Link to={"/store"} className='linktt'>Store</Link><Submenu /></p>
                    <Link to={`/store/men's clothing`} className='linktt'><p>men's clothing</p> </Link>
                    <Link to={`/store/jewelery`} className='linktt'> <p>jewelery</p> </Link>
                    <Link to={`/store/electronics`} className='linktt'> <p>electronics</p> </Link>
                    <Link to={`/store/women's clothing`} className='linktt'> <p>women's clothing</p> </Link>
                    {/* <p className='extarp'>                {(loggedIn) ?
                        null :
                        <div>
                            <div className='p2'>
                                <p className='navp1'> <img src={pofileImg} /> Hello. {userName}
                                    <ul>
                                        <li onClick={logout} className="logoutbtn">Logout</li>
                                    </ul>
                                </p>
                                <Link to="/cart" className='linktt'><p className='navcart1'> <img src={cartImg} /> {itemCount} items {(totalPrice)}</p></Link>
                            </div>
                        </div>
                    }</p> */}
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