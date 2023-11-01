import {logo, error} from '../public/links'
import Image from 'next/image'
import Link from 'next/link'

const Errorpage = () => {
  return (
    <div className='w-[90%] flex flex-col items-center justify-center my-8 mx-[5%]'>
      <Image src={logo} alt="logo" className='mb-1 '/>
      <div className='flex items-center'>
       <h1 className='text-violet-700 font-bold text-[6rem] sm:text-[10rem]'>4</h1>
       <Image src={error} alt="error" className='sm:w-[150px]'/>
       <h1  className='text-violet-700 font-bold text-[6rem] sm:text-[10rem]'>4</h1>
      </div>
      <h1 className='mb-3 text-4xl sm:text-5xl font-bold text-gray-800'>Something's not right.</h1>
      <p className='text-lg font-semibold text-gray-500/60 my-6'>We can't find the page your are looking for</p>
      <Link className='col-span-7 md:col-span-2 bg-violet-800 font-semibold h-fit text-white px-3 py-3 rounded-[60px] w-fit flex items-center gap-6 justify-between hover:text-black hover:bg-white border border-violet-700 transition-all' 
        href="/">
        <span>Back To Homepage </span>
        <span className='font-bold'>.</span>
      </Link>
    </div>
  )
}

export default Errorpage