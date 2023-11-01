import Link from 'next/link'
import React from 'react'

const ServicesCard = ({
    Title = "Title Here",
    TitleLink = "/",
    Text = "Text Here",
}) => {
  return (
    <>
        <div className="w-full px-8 py-10 border-2 space-y-8 border-gray-400 rounded md:w-1/2 bg-[#fcf8ff] hover:bg-[#fbf7ff]">
            <h2 className="text-4xl font-bold transition-colors duration-300 ease-linear md:text-[2.5rem] hover:text-purple-800"><Link href={TitleLink}>{Title}</Link></h2>
            <p className='text-[#7987a1]'>{Text}</p>
        </div>
    </>
  )
}

export default ServicesCard