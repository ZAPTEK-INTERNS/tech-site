import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {
    const handleClick = () => {
        alert("Cart Added");
    }
  return (
    <div>
        <button 
            className='inline-flex items-center p-4 bg-[#8000ff] rounded-full text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black space-x-8'
            onClick={() => handleClick()}
        >
            <FaShoppingCart size={20} />
        </button>
    </div>
  )
}

export default CartButton