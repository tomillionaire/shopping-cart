import React from 'react'
import "./person.css"

const Person = (props) => {
  return (
    <div>
      
       <h1>My name is {props.name}, I have {props.numberOfChildren} children</h1>
      <img src={props.image} alt="" className="imgClass" />
    </div>
  )
}

export default Person