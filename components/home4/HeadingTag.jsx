import React from 'react'

const HeadingTag = ({Title, extraStyle}) => {
  return (
    <h3 className={`bg-[#f2e5ff] text-[#8000ff] inline-block py-2 px-3 font-semibold rounded transition-colors ease-linear duration-300 ` + extraStyle} data-aos="fade-up">{Title}</h3>
  )
}

export default HeadingTag