import {logo1, logo2, logo3, logo4, logo5,} from '../../public/links'
import Image from 'next/image'
import logo6 from '../../public/images/nietzsche.svg'



const images = [
  logo1, logo2, logo3, logo4, logo5,logo6
]

const Clients = () => {
  return (
   <section className='bg-black/5'>
    <div className='mx-12 py-12 relative overflow-hidden'>
      <div className=' justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
         {images.map((item, index) => (
          <div key={index} className="w-[200px]">
            <Image src={item} alt={index}  
            className='brightness-0'/>
          </div>
         ))}
      </div>
     </div>
    </section>
  );
};
 

export default Clients
