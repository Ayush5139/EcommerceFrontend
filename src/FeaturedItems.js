import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './FeaturedItems.css'
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaArrowDown, FaArrowUp, FaBackward } from 'react-icons/fa'

function FeaturedItems() {
  const [iii, setIII] = useState(0)
  const [finalData, setfinalData] = useState([])
  const [fData, setFData] = useState([])
  const [selected, seSelected] = useState(true)
  function changeSelected() {
    const respo = fData.length   
    if(iii<respo-2){
      setIII(iii + 3)
    }
  }
  function changeSelected1() {
    if (iii>0){
      setIII(iii - 3)
    }
  }
  useEffect(() => {
    axios.get("https://ecommercebackend-4lkz.onrender.com/featured")
      .then((data) => setFData(data.data))
  }, [])
  console.log(iii)

  return (
    <div>
      <h1>Featured Items</h1>
      <div className='feadiv'>
        <button onClick={changeSelected1} className='leftbtn'> <FaAngleLeft/></button>
        {
          fData.slice(iii, iii + 3).map((item) => (
            <div className='feachild'> <div><img src= {item.image} className='fea-div1-image'/></div><div> <Link to={`/store/item/${item.title}`} className='linktt'>  <p className='fea-div1-title'>{item.title}</p><p className='fea-div1-price'>{item.price} $</p> </Link> </div>  </div>
            ))
        }
        <button onClick={changeSelected} className='leftbtn'><FaAngleRight/></button>
      </div>
      <div className='feadiv1'>
        <button onClick={changeSelected1} className='leftbtn'> <FaAngleLeft/></button>
        {
          fData.slice(iii, iii + 1).map((item) => (
            <div className='feachild'> <div><img src= {item.image} className='fea-div1-image'/></div><div> <Link to={`/store/item/${item.title}`} className='linktt'>  <p className='fea-div1-title'>{item.title}</p><p className='fea-div1-price'>{item.price} $</p> </Link> </div>  </div>
            ))
        }
        <button onClick={changeSelected} className='leftbtn'><FaAngleRight/></button>
      </div>
    </div>
  )
}

export default FeaturedItems