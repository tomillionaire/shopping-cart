import React from 'react'
import "./box.css"
import { FaStar,FaShoppingCart } from "react-icons/fa";

const Box = (props) => {
    const image = "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <div className='box'>
       <img src={props.images} alt="" className="boxImg" /> 
       <h3 className="boxTitle"> {props.title}</h3>
       <p className="boxPrice"> {props.price}</p>
       <div className="boxRating">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
       </div>
       <button>
         <span>Add to Cart</span>
         <FaShoppingCart className='boxIcon'/>
         </button>

         
     </div>
  )
}

export default Box