import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import { useState } from 'react'

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const [value, setValue] = useState(1)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
      <input 
        type="number" 
        placeholder='enter the number of cakes to restock' 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default CakeView