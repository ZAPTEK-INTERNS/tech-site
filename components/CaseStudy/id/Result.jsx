import Image from 'next/image'
import {BsCircle} from 'react-icons/bs'
import s2 from '../../../public/images/service2.webp'


const Result = ({data}) => {
  return (
    <div className="md:flex my-8">
       
        <div data-aos="fade-up" className="md:w-1/2 space-y-4">
          <p className='font-bold md:text-7xl text-4xl'>Results</p>
          {
                data?.resultlist?.map((item,idx)=>(
<div className='flex' key={idx}>
<div className=' h-fit w-fit'>
<BsCircle size={6} className='bg-violet-700 rounded-full text-white mx-2 mt-2.5'/>
            </div>
            <p className='font-medium text-gray-400'> <span className='text-gray-500'> {item.head}:</span>  {item.body}</p>
</div>
                ))
            }
             <p className='font-medium  text-gray-400'>{data.result}</p>
           
        </div>

        <div className="md:w-1/2  flex justify-center p-4 ">
           <Image data-aos="zoom-in" src={s2} width="auto" height="auto" alt='service2' className='rounded-lg'/>
        </div>
        </div>
      
  )
}

export default Result
