import React, {useState} from 'react'
import "./CartTab.css"
import CartModal from './CartModal'

const CartTab = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <div className='cart-tab-container' onClick={() => setModalVisible(!modalVisible)}>
        <div className='item-price-container'>
          <label>{props.numberOfItems} ITEM{props.numberOfItems > 1 ? <span>S</span> : <></>}</label>
          <label>₹{props.price} plus taxes</label>
        </div>
        <label className='next'>
          Next &#5125;
        </label>
      </div>
      <CartModal 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          cartDetails = {props.cartDetails}
          cartDetailsHandler = {props.cartDetailsHandler}
          ordersDetailsHandler = {props.ordersDetailsHandler}
      />
    </>
  )
}

export default CartTab