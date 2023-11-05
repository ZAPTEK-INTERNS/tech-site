import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go'

const ButtonLink = ({
    LinkName = "View More",
    URLLink = '/',
}) => {
  return (
    <>
        <Link href={URLLink} className='flex w-fit px-4 py-2 gap-8 items-center bg-[#8000ff] rounded-[2.4rem] text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black'>
            <p>{LinkName}</p>
             <p><GoDotFill /></p>
        </Link>
    </>
  )
}

export default ButtonLink