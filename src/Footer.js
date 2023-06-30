import React from 'react'
import twitter from './twitter.jpg'
import facebook from './facebook.jpg'
import './Footer.css'
import card1 from './master_card.jpg'
import card2 from './Paypal.jpg'
import card3 from './visa.jpg'
import card4 from './Western_union.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <hr className='maindiv-hr'></hr>
        <div className='footer-div1'>
            <div className='mini-div2'>
                <p className='minidiiv-title'>iSHOP</p>
                <p className='minidiv-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div className='mini-div2'>
                <p className='minidiiv-title2'>Follow Us</p>
                <p className='minidiv-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                <img src={facebook} className = 'minidiv-img'/>
                <img src={twitter}/>
            </div>
            <div className='mini-div2'>
                <p className='minidiiv-title2'>Contact Us</p>
                <p className='minidiv-p'>iShop: address @building 124 <br></br> Call us now: 0123-456-789 <br></br> Email: support@whatever.com</p>
            </div>
        </div>
        <hr className='minidiv-hr'></hr>
        <div className='mini-div3'>
            <ul type = 'none'> <li className='ul-title'>Information</li>
                <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
            <ul type = 'none'> <li className='ul-title'>Service</li>
            <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
            <ul type = 'none'> <li className='ul-title'>Extras</li>
            <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
            <ul type = 'none'> <li className='ul-title'>My Account</li>
            <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
            <ul type = 'none'> <li className='ul-title'>Useful Links</li>
            <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
            <ul type = 'none'> <li className='ul-title'>Our Offers</li>
            <li><Link to={"/aboutus"} className='linktt'>About Us</Link></li>
                <li><Link to={"/information"} className='linktt'>Information</Link></li>
                <li><Link to={"/privacy"} className='linktt'>Privacy  Policy</Link></li>
                <li><Link to={"/terms"} className='linktt'>Terms & Condition</Link></li>
            </ul>
        </div>
        <hr className='maindiv-hr'></hr>
        <div className='mini-div4'>
            <img src={card4} className = 'minicard'/>
            <img src={card1} className = 'minicard'/>
            <img src={card2} className = 'minicard'/>
            <img src={card3} className = 'minicard'/>
        </div>
    </div>
  )
}

export default Footer