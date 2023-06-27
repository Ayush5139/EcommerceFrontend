import React from 'react'
import { Link } from 'react-router-dom'

function Submenu() {
    return (
        <div>
            <ul className="nav__submenu" type='none'>
                <li>  <Link to='/' className='linktt'>  <p className='sub-cat'>Home</p> </Link> </li>
                <li><Link to={`/store/men's clothing`} className='linktt'><p>men's clothing</p> </Link></li>
                <li><Link to={`/store/jewelery`} className='linktt'> <p>jewelery</p> </Link></li>
                <li><Link to={`/store/electronics`} className='linktt'> <p>electronics</p> </Link></li>
                <li><Link to={`/store/women's clothing`} className='linktt'> <p>women's clothing</p> </Link></li>
            </ul>
        </div>
    )
}

export default Submenu