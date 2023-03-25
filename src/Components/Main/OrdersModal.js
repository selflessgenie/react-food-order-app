import React, {useEffect, useState} from 'react'
import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import './CartModal.css'
import { fontWeight } from '@mui/system'

const OrdersModal = (props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        var total = 0;
        if(props.orders == null || props.orders == undefined)
            return;
        props.orders.map((orderedItems) => (
            total = total + (orderedItems.count * orderedItems.price)
        ))
        setTotalPrice(total)
    }, [props.orders])

  return (
    <>
    <CModal 
        visible={props.modalVisible} 
        onClose={() => props.toggleShowOrdersPage(false)}
        backdrop='static'
        scrollable
    >
      <CModalHeader>
        <CModalTitle>Placed orders</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {props.orders == null ? <label>No items ordered yet.</label> : <></>}
        <table className='table-container'>
        {props.orders && props.orders.map((orderedItems) => (
            
            
            <tr className='name-price-item-counter-container'>
                    <td className='name'><label>{orderedItems.name}</label></td>
                    <td><label>₹{orderedItems.price}</label></td>
                    <td><label>X {orderedItems.count}</label></td>
            <td><label>₹{orderedItems.price * orderedItems.count}</label></td>
            </tr>
            
            
        ))}
        {/* <div className='name-price-item-counter-container'>
                <div className='name-price-container'>
                    <label>{orderedItems.name} X {orderedItems.count}</label>
                    <label>₹{orderedItems.price}</label>
                </div>
                <div>
                    <label>₹{orderedItems.price * orderedItems.count}</label>
                </div>  
            </div> */}
        </table>
        
      </CModalBody>
      {props.orders == null ? <></> : 
      <CModalFooter className='total-container'>
            <label style={{fontWeight: "bolder"}}>Total payable amount</label>
            <label style={{fontWeight: "bolder"}} className=''>₹{totalPrice}</label>
      </CModalFooter>}
    </CModal>
  </>
  )
}

export default OrdersModal