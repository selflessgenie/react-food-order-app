import React from 'react'
import "./CartTab.css"

const CartTab = (props) => {
  return (
    <div className='cart-tab-container'>
      <div className='item-price-container'>
        <p>{props.numberOfItems} ITEM{props.numberOfItems > 1 ? <span>S</span> : <></>}</p>
        <p>₹{props.price} plus taxes</p>
      </div>
      <p className='next'>
        Next &#5125;
      </p>
    </div>
  )
}

export default CartTab