import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import './Cart.css';
import { Link } from 'react-router-dom';
function Cart() {
    const [cartData, setCartData] = useState([]);
    const [otherData, setOtherData] = useState(0)
    const [price, setPrice] = useState(0)
    const [total, setTotal] = useState(0)
    const [coupon, setCoupon] = useState('');
    const [variable, setVariable] = useState(true)
    const shippingPrice = 20 * cartData.length;
    useEffect(() => {
        axios.get("https://ecommercebackend-4lkz.onrender.com/cartData")
            .then((res) => setCartData(res.data));
    }, [variable]);
    // useEffect(() => {
    //     axios.get("https://ecommercebackend-4lkz.onrender.com/otherCartData")
    //         .then((res) => setOtherData(res.data))
    //     setTotal(otherData[0])
    //     setPrice(otherData[1])
    // }, [cartData])
    function discountRate() {
        if (coupon === "Test Coupon") {
            // Apply the discount to each item in the cart
            const newCartData = cartData.map(item => {
                return { ...item, price: item.price * 0.5 };
            });
            setCartData(newCartData);
        } else {
            alert("Invalid Coupon");
        }
    }
    console.log(total)
    console.log(price)

    function deleteItem(e) {
        const finalValue = e.target.value
        axios.post("https://ecommercebackend-4lkz.onrender.com/deleteItem", { finalValue })
        setVariable(!variable)
    }

    function handleIncreaseQuantity(itemId) {
        const newCartData = cartData.map(item => {
            if (item._id === itemId) {
                return { ...item, countInCart: item.countInCart + 1 };
            }
            return item;
        });
        setCartData(newCartData);
    }
    function handleDecreaseQuantity(itemId) {
        const newCartData = cartData.map(item => {
            if (item._id === itemId && item.countInCart > 1) {
                return { ...item, countInCart: item.countInCart - 1 };
            }
            return item;
        });
        setCartData(newCartData);
    }
    // Calculate the total price based on the current cartData
    const totalPrice = cartData.reduce((total, item) => total + item.price * item.countInCart, 0);
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
                            <div className='cartmap' key={item._id}>
                                <button className='cartmapbtn' onClick={deleteItem} value={item._id}>x</button>
                                <img src={item.image} alt={item.title} className='cartmapimg' />
                                <p className='cartmaptitle'>{item.title}</p>
                                <p className='cartmapprice'>{item.price * item.countInCart}</p>
                                <p className='cartmapcount'>
                                    <button onClick={() => handleDecreaseQuantity(item._id)}>-</button>
                                    <span>{item.countInCart}</span>
                                    <button onClick={() => handleIncreaseQuantity(item._id)}>+</button>
                                </p>
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
                    <div className='carttotal'><p>SubTotal :</p> <p>{totalPrice} $</p></div>
                    <div className='carttotal'><p>Shipping :</p> <p>{shippingPrice}$</p></div>
                    <div className='carttotal'><p>Coupon : </p> <p> No</p></div>
                    <hr></hr>
                    <div className='carttotal'><h1>Total : </h1> <h1>{(totalPrice + shippingPrice).toFixed(2)}</h1></div>
                    <Link to={"/checkout"}><button className='checkoutbtn'>Checkout</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;