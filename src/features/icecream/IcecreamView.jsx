import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecreams)
  return (
    <div>
      <h2>Number of IceCream - {numOfIcecream}</h2>
      <button>Order IceCream</button>
      <button>Restock IceCream</button>
    </div>
  )
}

export default IcecreamView