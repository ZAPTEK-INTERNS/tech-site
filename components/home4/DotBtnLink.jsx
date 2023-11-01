import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'

const DotBtnLink = ({
    LinkName = "View More",
    URLLink = '/',
    showIcon = true,
}) => {
  return (
    <>
        <Link href={URLLink} className='inline-flex items-center bg-[#8000ff] py-3 px-6 rounded-full text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black space-x-8'>
            <p>{LinkName}</p>
            {showIcon && <GoDotFill />}
        </Link>
    </>
  )
}

export default DotBtnLink