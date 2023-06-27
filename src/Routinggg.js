import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import MainPage2 from './MainPage2'
import ProductPage from './ProductPage'
import Signup from './Signup'
import Store from './Store'

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
        </Routes>
    </div>
  )
}

export default Routinggg