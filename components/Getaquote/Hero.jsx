import {Navbar} from '../links'

const Hero = () => {
  return (
    <div className='bg-hero bg-center bg-cover bg-no-repeat h-[60vh] w-full'>
      <Navbar/>
      <div className='flex text-white flex-col justify-center items-center h-[60vh] sm:text-lg w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%]'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Get a Quote</h1>  
     </div>
    </div>
  )
}

export default Hero