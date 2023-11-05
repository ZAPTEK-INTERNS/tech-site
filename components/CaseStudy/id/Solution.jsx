import Image from 'next/image'
import {BsCircle} from 'react-icons/bs'
import im1 from '../../../public/images/case-study3.jpg'
import im2 from '../../../public/images/case-study5.jpg'
import im3 from '../../../public/images/case-study4.jpg'
import im4 from '../../../public/images/case-study6.jpg'
const Solution = ({data}) => {
  return (
    <div className="md:flex my-8">
        <div className="md:w-1/2  my-8">
          <div className='grid md:grid-flow-row-dense md:grid-cols-2  gap-2 '>
          <div className=""></div>
          <div className="md:row-span-3"></div>

        <Image  data-aos="fade-up" src={im1} width={600} height={600} alt='service2' className='rounded-lg md:row-span-4' />
        <Image data-aos="fade-up"  src={im2} width={600} height={600} alt='service2' className='rounded-lg md:row-span-4 ' />
        <Image data-aos="fade-up"  src={im3} width={600} height={600} alt='service2' className='rounded-lg md:row-span-4 ' />
        <Image data-aos="fade-up"  src={im4} width={600} height={600} alt='service2' className='rounded-lg md:row-span-4 md:-mt-16' />

          </div>

        </div>
        <div data-aos="fade-up" className="md:w-1/2 space-y-4 mx-4">
          <p className='font-bold md:text-7xl text-4xl'>Solution</p>
          <p className='font-medium  text-gray-400'>{data.solution}</p>
      
            
            {
                data.solutionlist.map((item,idx)=>(
<div className='flex' key={idx}>
<div className=' h-fit w-fit'>
            <BsCircle size={6} className='bg-violet-700 rounded-full text-white mx-2 mt-2.5'/>
            </div>
            <p className='font-medium  text-gray-400'> <span className='text-gray-500'> {item.head}:</span>  {item.body}</p>
</div>
                ))
            }
           
        </div>
        </div>
      
  )
}

export default Solution
