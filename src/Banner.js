import React from 'react'
import './Banner.css'
import img from './iphone_6_plus@2x.png'
import shipping from './shipping.jpg'
import refund from './refund.jpg'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
        <div className='banner1'>
            <div className='banner2'>
                <p className='banner-title'>iPhone 6 Plus</p>
                <p className='banner-des'>Performance and design. Taken <br></br> right to the edge.</p>
                <Link to={`/store/item/Iphone 6 Plus`} className = 'linktt'><p className='mini2shop'>Show Now</p></Link>
            </div>
            <div>
                <img src={img} className ='banner-img'/>
            </div>
        </div>
        <div className='banner33'>
          <div className='mini-div1'>
            <img src={shipping} />
            <p className='mini-title'>FREE SHIPPING</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className='mini-div1'>
            <img src={refund} />
            <p className='mini-title'>100% REFUND</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
          <div className='mini-div1'>
            <img src={shipping} />
            <p className='mini-title'>SUPPORT 24/7</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>
        </div>
    </div>
  )
}

export default Banner