import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import Information from './Information'
import Login from './Login'
import MainPage2 from './MainPage2'
import Privacy from './Privacy'
import ProductPage from './ProductPage'
import Signup from './Signup'
import Store from './Store'
import Terms from './Terms'

function Routinggg() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/store/:cat' element={<MainPage2/>}/>
            <Route path='/store/item/:pname' element={<ProductPage/>}/>
            <Route path='/user/signup' element={<Signup/>}/>
            <Route path='/user/login' element = {<Home/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/information' element={<Information/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default Routinggg