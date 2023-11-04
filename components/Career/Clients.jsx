import Image from 'next/image'
import 
  {whitelogo1, 
  whitelogo2, 
  whitelogo3, 
  whitelogo4, 
  whitelogo5, 
  whitelogo6, 
  whitelogo7, 
  whitelogo8, 
  whitelogo9, 
  } from '../../public/links'



const images = [
    whitelogo1, whitelogo2, whitelogo3, whitelogo4, whitelogo5, whitelogo6, whitelogo7, whitelogo8, whitelogo9
]

const Clients = () => {
  return (
   <section className='bg-violet-600'>
   <div className='mx-8 my-12 py-8 relative overflow-hidden '>
      <div className='flex justify-center items-center gap-8 slider animate-scroll'>
         {images.map((item, index) => (
          <div key={index} className="w-[200px]">
            <Image src={item} alt={index}  
            className='grayscale hover:grayscale-0 '/>
          </div>
         ))}
      </div>
    </div>
    </section>
  );
};
 

export default Clients
