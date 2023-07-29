import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import './Cart.css'

function Cart() {
    const [cartData, setCartData] = useState([])
    const [otherData, setOtherData] = useState(0)
    const [price, setPrice] = useState(0)
    const [total, setTotal] = useState(0)
    const [coupon, setCoupon] = useState()
    const [variable, setVariable] = useState(true)
    useEffect(() => {
        axios.get("https://ecommercebackend-4lkz.onrender.com/cartData")
            .then((res) => setCartData(res.data))
    }, [variable])
    console.log(cartData)
    useEffect(() => {
        axios.get("https://ecommercebackend-4lkz.onrender.com/otherCartData")
            .then((res) => setOtherData(res.data))
        setTotal(otherData[0])
        setPrice(otherData[1])
    }, [cartData])
    function discountRate() {
        if (coupon == "Test Coupon") {
            setPrice(price - (price * 0.5))
        }
        else {
            alert("Invalid Coupon")
        }
    }
    console.log(total)
    console.log(price)
    function deleteItem(e) {
        const finalValue = e.target.value
        axios.post("https://ecommercebackend-4lkz.onrender.com/deleteItem", { finalValue })
        setVariable(!variable)
    }
    const shippingPrice = 20 * cartData.length

    return (
        <div>
            <Nav />
            <div className='cartdiv1'>
                <p className='cartname'>CART</p>
            </div>
            <div className='cartmain1'>
                <div className='cartmap1'>
                    <p className='cartmapimg1'>Product</p>
                    <p className='cartmapprice1'>Price</p>
                    <p className='cartmapcount1'>QTY</p>
                    <p className='cartmapunit1'>Unit Price</p>
                </div>
                <div>
                    {
                        cartData.map((item) => (
                            <div className='cartmap'>
                                <button className='cartmapbtn' onClick={deleteItem} value={item._id}>x</button>
                                <img src={item.image} className='cartmapimg' />
                                <p className='cartmaptitle'>{item.title}</p>
                                <p className='cartmapprice'>{item.price * item.countInCart}</p>
                                <p className='cartmapcount'><button onClick={async (e) => {
                                    e.target.nextSibling.innerText = parseInt(e.target.nextSibling.innerText) - 1;
                                    const newObj = {
                                        id: item._id,
                                        userID: sessionStorage.getItem("USER"),
                                        finalCount: e.target.nextSibling.innerText
                                    }
                                    console.log(newObj)
                                    const res2 = await axios.post("https://ecommercebackend-4lkz.onrender.com/updateOID", { data: newObj })
                                        .then((res) => console.log("responseeeeeeeeeee", res))
                                }}>-</button><span>{item.countInCart}</span><button onClick={async (e) => {
                                    e.target.previousSibling.innerText = parseInt(e.target.previousSibling.innerText) + 1; const newObj = {
                                        id: item._id,
                                        userID: sessionStorage.getItem("USER"),
                                        finalCount: e.target.previousSibling.innerText
                                    }
                                    console.log(newObj)
                                    const res2 = await axios.post("https://ecommercebackend-4lkz.onrender.com/updateOID", { data: newObj })
                                        .then((res) => console.log("responseeeeeeeeeee", res))
                                }}>+</button></p>
                                <p className='cartmapunit'>{item.price}</p>
                            </div>
                        ))
                    }
                </div>
                <hr></hr>
            </div>
            <div className='cartmain2'>
                <div className='main2mini1'>
                    <input type="text" placeholder='Test Coupon' className='mini1input' onChange={e => setCoupon(e.target.value)} />
                    <button className='mini1btn' onClick={discountRate}>Use Coupon</button>
                </div>
                <div className='main2mini2'>
                    <div className='carttotal'><p>SubTotal :</p> <p>{(price)} $</p></div>
                    <div className='carttotal'><p>Shipping :</p> <p>{shippingPrice}$</p></div>
                    <div className='carttotal'><p>Coupon : </p> <p> No</p></div>
                    <hr></hr>
                    <div className='carttotal'><h1>Total : </h1> <h1>{(price + shippingPrice).toFixed(2)}</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Cart