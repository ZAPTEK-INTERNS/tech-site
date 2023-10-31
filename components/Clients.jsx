import {logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo11, logo10} from '../public/links'
import Image from 'next/image'



const images = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo10, logo11
]

const Clients = () => {
  return (
   <section className='mx-8 my-12 relative overflow-hidden w-auto'>
      <div className='flex justify-center gap-8 slider animate-scroll'>
         {images.map((item, index) => (
          <div key={index} className="min-w-[200px]">
             <Image src={item} alt={index}  
             className='mb-12 grayscale hover:grayscale-0 '/>
            </div>
         ))}
      </div>
    </section>
  );
};
 

export default Clients
