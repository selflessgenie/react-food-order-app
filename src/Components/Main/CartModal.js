import React, { useState,useEffect } from 'react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import './CartModal.css'
import ItemCounter from './ItemCounter';

const CartModal = (props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        var total = 0;
        props.cartDetails.map((orderedItems) => (
            total = total + (orderedItems.count * orderedItems.price)
        ))
        setTotalPrice(total)
    }, [props.cartDetails])

  return (
    <>
    <CModal 
        visible={props.modalVisible} 
        onClose={() => props.setModalVisible(false)}
        backdrop='static'
        scrollable
    >
      <CModalHeader>
        <CModalTitle>Order summary</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {props.cartDetails && props.cartDetails.map((orderedItems) => (
            <div className='name-price-item-counter-container'>
                <div className='name-price-container'>
                    <label>{orderedItems.name}</label>
                    <label>₹{orderedItems.price}</label>
                </div>
                <div>
                    <ItemCounter 
                        defaultCount={orderedItems.count}
                        cartDetailsHandler={props.cartDetailsHandler}
                        id={orderedItems.id}
                        price={orderedItems.price}
                        name={orderedItems.name} 
                        key={orderedItems.id}
                    />
                    <label>₹{orderedItems.price * orderedItems.count}</label>
                </div>  
            </div>
        ))}
        
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" className='place-order-container'>
            <div className='total-container'>
                <label className=''>₹{totalPrice}</label>
                <label>Total</label>
            </div>
            <label>Place Order &#5125;</label>
        </CButton>
      </CModalFooter>
    </CModal>
  </>
  )
}

export default CartModal