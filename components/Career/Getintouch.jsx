import Link from 'next/link'


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
       <div className='absolute top-[30%] text-white mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] flex flex-col justify-center items-center text-center'>
        <h1 className='text-5xl sm:text-6xl lg:text-[6rem] font-bold'>
          Let's build <br /> something different
        </h1>
        <p className='my-6 sm:font-semibold text-lg'>Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.</p>
        <Link className='col-span-7 md:col-span-2 bg-white h-fit text-black px-3 py-3 rounded-[60px] w-fit flex items-center gap-6 justify-between hover:text-white hover:bg-violet-700 font-semibold transition-all' 
           href='/'>
          <span>Get in Touch</span>
           <span className='font-bold'>.</span>
        </Link>
       </div>
    </section>
  )
}

export default Getintouch
