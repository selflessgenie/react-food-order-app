import React, { useEffect } from 'react'
import { useState } from "react"
import './MenuCard.css'

const MenuCard = (props) => {
  const [counterValue, setCounterValue] = useState(0);
  
  const incrementCounterHandler = () => {
    setCounterValue(previousCount => previousCount + 1)
    
  }

  const decrementCounterHandler = () => {
    if(counterValue > 0){
        setCounterValue(previousCount => previousCount - 1)
    }
  }

  useEffect(() => {
    props.cartDetailsHandler(counterValue, props.id, props.price.substring(1))
  }, [counterValue])

  return (
    <div className='card-container'>
        <div className='food-description-price-container'>
            <p>{props.name}</p>
            <p className='price'>{props.price}</p>
        </div>
        <div className='food-img-counter-container'>
            <img 
                src={props.imageURL}
                className='food-img'
            />
            <div className='counter'>
                <button 
                    className='increment-decrement-button'
                    onClick={()=>decrementCounterHandler(props.id)} 
                    >-</button>
                <label id="counter-value">{counterValue}</label>
                <button 
                    className='increment-decrement-button'
                    onClick={()=>incrementCounterHandler(props.id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default MenuCard