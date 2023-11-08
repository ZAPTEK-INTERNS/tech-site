import Link from 'next/link'
import ButtonLink from './ButtonLink'

const Getintouch = () => {

  return (
    <section className='mt-[100px] relative'>
       <div className='h-screen grid grid-cols-7 '>
          <div className='bg-purple-100 col-sppan-1'></div>
          <div className='bg-purple-200 col-sppan-1'></div>
          <div className='bg-purple-300 col-sppan-1'></div>
          <div className='bg-purple-400 col-sppan-1'></div>
          <div className='bg-purple-500 col-sppan-1'></div>
          <div className='bg-purple-600 col-sppan-1'></div>
          <div className='bg-[#8403fc] col-sppan-1'></div>
       </div>
       <div data-aos="zoom-in"
         className='absolute top-[20%] text-white mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] flex flex-col justify-center items-center text-center'>
        <h1 className='text-5xl sm:text-6xl lg:text-[6rem] font-bold'>
          Let's build <br /> something different
        </h1>
        <p className='my-6 sm:font-semibold text-lg'>Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.</p>
        <ButtonLink URLLink='getaquote'/>
       </div>
    </section>
  )
}

export default Getintouch
