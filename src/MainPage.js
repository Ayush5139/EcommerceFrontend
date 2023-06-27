import React, { useEffect, useState } from 'react'
import './MainPage.css'
import axios from 'axios'
import img1 from './2_corousel.jpg'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaArrowDown, FaBackward } from 'react-icons/fa'

function MainPage(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ecommercebackend-4lkz.onrender.com/data")
        .then((res) => setData(res.data))
    }, [])
    const [showMore, setShowMore] = useState(true)
    function changeShow(){
        setShowMore(!showMore)
    }
    console.log("maiin data",data)
    const userid = sessionStorage.getItem("USER")
    console.log(userid)
    return (
        <div className='maindiv5236'>
            <hr></hr>
            <div className='div3'>
                <img src={img1} className='img1' />
            </div>
            <div className='div4'>
                <div>
                    <p className='div4-p1'>BEST SELLER</p>
                </div>
                {/* <div className='div4-sub1'>
                    <p>All</p>
                    <p>Laptop</p>
                    <p>Phone</p>
                    <p>Tablets</p>
                    <p>Music Players</p>
                    <p>ACCESORIES</p>
                </div> */}
            </div>
            <div className='main-div1'>
                {
                    data.slice(0, 8).map((item) => (
                        <div className='child1'><Link to={`/store/item/${item.title}`} className='linktt'><img src= {item.image} className='main-div1-image'/><p className='main-div1-title'>{item.title}</p><p className='main-div1-price'>{item.price} $</p></Link></div>
                    ))
                }
            </div>
            <div>
                {
                    (showMore) ? <div><button onClick={changeShow} className='showMorebtn1'><FaAngleDown/>Show More</button></div> : <div><div className='main-div1'>{data.slice(9,17).map((item) => (
                        <div className='child1'><Link to={`/store/item/${item.title}`} className='linktt'><img src= {item.image} className='main-div1-image'/><p className='main-div1-title'>{item.title}</p><p className='main-div1-price'>{item.price} $</p></Link></div>
                    ))}</div><button onClick={changeShow} className='showMorebtn1'> <FaAngleUp/> Show Less</button></div>
                }
            </div>
        </div>
    )
}

export default MainPage