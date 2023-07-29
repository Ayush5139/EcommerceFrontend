import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import './ProductPage.css'

function ProductPage() {
    const data = useParams()
    console.log(data.pname)
    const [finalData,setFinalData] = useState([])
    const [itemID,setItemID] = useState("")
    const [count,setCount] = useState(1)
    useEffect(()=>{ 
      axios.get(`https://ecommercebackend-4lkz.onrender.com/filter/${data.pname}`)
      .then((res)=>{setFinalData(res.data);setItemID(res.data[0]._id)})
    },[])
    console.log(finalData)
    const [updCount,setUpdCount] = useState(1)
    function addCount(){
      setUpdCount(updCount+1)
    }
    function subCount(){
      setUpdCount(updCount-1)
    }
    async function handleSubmit(){
      console.log(finalData[0]._id)
      const newObj = {
        id:itemID,
        userID: sessionStorage.getItem("USER"),
        finalCount : updCount

      }
      console.log(newObj)
      const res = await axios.post("https://ecommercebackend-4lkz.onrender.com/updateOID",{data:newObj})
      .then((res)=>console.log(res))
      document.querySelector(".addedtocart").style.display = "block"
      setTimeout(() => {
        document.querySelector(".addedtocart").style.display = "none"
      }, 3000);
    } 

    useEffect(()=>{
      const newObj = {
        id:itemID,
        finalCount : count
      }
      console.log(newObj)
      axios.get(`https://ecommercebackend-4lkz.onrender.com/update/data/${data.pname}`,{daata:newObj})
      .then((res)=>setUpdCount(res.data[0].countInCart))
    },[])
    console.log("updated count",updCount)
    const userid = sessionStorage.getItem("USER")
    console.log(userid)
    // function addedtoCart(){
    //   document.querySelector(".addedtocart").style.display = "block"
    //   setTimeout(() => {
    //     document.querySelector(".addedtocart").style.display = "none"
    //   }, 3000);
    // }
  return (
    <div>
      <div className='addedtocart'><p>Added To Cart !!</p></div>
      <Nav/>
      <div className='productdiv1'>
        <div>
          {
            finalData.map((item)=>(
              <img src={item.image} className = 'productimage'/>
            ))
          }
        </div>
        <div>
          {
            finalData.map((item)=>(
              <div className='productttttt'>
                <p className='producttext'>{item.title}</p>
                <p className='productprice'>{item.price} $</p>
                <div className='randomdiv'>
                  <button onClick={subCount} className='countbtn'>-</button> <p className='countp1'> {updCount}  </p>  <button onClick={addCount} className='countbtn'>+</button>
                </div>
                <div>
                  <button onClick={handleSubmit} className = 'addbtn'>Add To Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductPage