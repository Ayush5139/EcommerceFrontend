import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'

function Store() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ecommercebackend-4lkz.onrender.com/data")
        .then((res) => setData(res.data))
    }, [])
  return (
    <div>
        <Nav/>
          <div className='main-div1'>
              {
                  data.map((item) => (
                      <div className='child1'><Link to={`/store/item/${item.title}`} className='linktt'><img src={item.image} className='main-div1-image' /><p className='main-div1-title'>{item.title}</p><p className='main-div1-price'>{item.price} $</p></Link></div>
                  ))
              }
          </div>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Store