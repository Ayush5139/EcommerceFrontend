import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

function Checkout() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    return (
        <div>
            <Nav />
            <div style={{ marginTop: "5%",marginBottom:"5%"}}><h1>Thank You For Shopping at iShop. <br></br> Your order Id is  {generateString(15)}</h1>
                <Link to={"/"} style={{ textDecoration: "none", color: "black", fontSize: "25px" }}>Go To Home Page</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout