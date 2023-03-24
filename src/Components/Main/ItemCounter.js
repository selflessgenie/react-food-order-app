import React, {useState, useEffect} from 'react'

const ItemCounter = (props) => {
  const [counterValue, setCounterValue] = useState(props.defaultCount);
  
  const incrementCounterHandler = () => {
    setCounterValue(previousCount => previousCount + 1)
    
  }

  const decrementCounterHandler = () => {
    if(counterValue > 0){
        setCounterValue(previousCount => previousCount - 1)
    }
  }

  useEffect(() => {
    props.cartDetailsHandler(counterValue, props.id, props.price.substring(1), props.name)
  }, [counterValue])

  useEffect(() => {
    if(counterValue != props.defaultCount)
      setCounterValue(props.defaultCount)
  }, [props.defaultCount])

  return (
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
  )
}

export default ItemCounter