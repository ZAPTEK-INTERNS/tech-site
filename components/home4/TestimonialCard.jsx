import React from 'react'

const TestimonialCard = ({
    name = "Name Here", 
    message = "Message Here",
    bgColor = "bg-[#fcf8ff]",
    cardWidth = ' w-80',
}) => {
  return (
    <div className={`px-8 py-10 border-2 space-y-8 border-gray-400 rounded md:w-[408px] bg-[#fcf8ff] ` + bgColor + cardWidth} data-aos="fade-up">
        <p>⭐⭐⭐⭐⭐</p>
        <p>{message}</p>
        <p className='text-[#8000ff] font-bold text-xl'>{name}</p>
    </div>
  )
}

export default TestimonialCard