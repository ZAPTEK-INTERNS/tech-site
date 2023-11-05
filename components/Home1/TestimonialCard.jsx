import React from 'react'

const TestimonialCard = ({
    name = "Name Here", 
    message = "Message Here",
}) => {
  return (
    <div className="w-[22rem] h-[24rem] p-4 border-2 text-white border-gray-200 rounded text-lg lg:w-[300px] bg-violet-500/95">
        <p>⭐⭐⭐⭐⭐</p>
        <p className='my-4 font-semibold'>{message}</p>
        <p className='text-white font-bold text-xl'>{name}</p>
    </div>
  )
}

export default TestimonialCard