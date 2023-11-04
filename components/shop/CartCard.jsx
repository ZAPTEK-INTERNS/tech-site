import Link from 'next/link'
import React from 'react'
import { HeadingTag } from '../home4'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'

const CartCard = ({ ShopLink, CategoryLink, CartImg, CartTag, CartTitle, CartPrice, CartKey, }) => {
  return (
    <>
    <div className='space-y-8' key={CartKey} data-aos="fade-up">
        <div className="relative">
            <Link href={`/shop/` + ShopLink} className='overflow-hidden'><Image src={CartImg} className='transition-transform duration-150 ease-linear rounded hover:scale-105' /></Link>
            <Link href={`/category/` + CategoryLink.toLowerCase()}>
            <HeadingTag 
                extraStyle={"absolute top-5 left-5 hover:text-black cursor-pointer"} 
                Title={CartTag}
            />
            </Link>
        </div>
        <div className="flex flex-row items-start justify-between">
            <div className='space-y-2'>
            <h2 className="text-2xl font-bold transition-colors duration-300 ease-linear md:text-2xl hover:text-purple-800"><Link href={`/shop/` + ShopLink}>{CartTitle}</Link></h2>
            <p className='font-semibold'>$ {CartPrice} USD</p>
            </div>
            <button  className='inline-flex items-center p-4 bg-[#8000ff] rounded-full text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black space-x-8'>
            <FaShoppingCart size={20} />
            </button>
        </div>
    </div>
    </>
  )
}

export default CartCard