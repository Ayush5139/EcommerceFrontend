import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import './MainPage2.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import Banner from './Banner'
import img111 from './iphone_8.jpg'

function MainPage2() {
    const data = useParams()
    console.log(data.cat)
    const [filteredData,setFilteredData] = useState([])
    useEffect(()=>{
        axios.get(`https://ecommercebackend-4lkz.onrender.com/filteredData/${data.cat}`)
        .then((res)=>setFilteredData(res.data))
    },[data.cat])
    console.log(filteredData)
  return (
    <div>
        <Nav/>
        <div className='cartdiv1'>
            <p className='cartname'>Store / {data.cat}</p>
        </div>
        <div className='main2div1'>
            <div className='tempdiv'>
                <div className='mini2div2'>
                    <div className='mini2text'>
                        <p className='mini2texttitle'>iPhone 8</p>
                        <p className='mini2textdes'>Performance and design. Taken right <br></br> to the edge. </p>
                        <Link to={`/store/item/Iphone 8`} className = 'linktt'><p className='mini2shop'>Show Now</p></Link>
                    </div>
                    <div>
                        <img src={img111} className='main2img'/>
                    </div>
                </div>
                <div className='main2parentt'>
                    {
                        filteredData.map((item)=>(
                            <div>
                                
                                <div className='main2child'><Link to={`/store/item/${item.title}`} className = 'linktt'><img src={item.image} className='filteredImage'/>
                                <p className='filteredTitle'>{item.title}</p>
                                <p className='filteredPrice'>{item.price} <span className='prices1'>{((item.price*0.5)+item.price).toFixed(2)}</span></p></Link></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MainPage2
