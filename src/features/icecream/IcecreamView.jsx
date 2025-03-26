import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams)
  const [value, setValue] = useState(1)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of IceCream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(parseInt(value)))}>Restock IceCream</button>
      <input 
        type="number" 
        placeholder='enter the number of icecreams to restock' 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default IcecreamView