import { blogsData } from './index'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRightShort} from 'react-icons/bs'

const Posts = ({search}) => {
  return (
    <section className='mx-[7%] w-[86%] sm:mx-[4%] sm:w-[92%] grid grid-cols-6 gap-8 mb-[150px]'>
      <div className='col-span-6 md:col-span-4 relative mb-6 md:mb-0'>
        <Link href={`/blog/${blogsData[0].id}`}>
          <div className='overflow-hidden group'>
           <Image 
            src={blogsData[0].image} 
            className='transform transition-transform rounded-md group-hover:scale-110 duration-300' 
            alt="blog 1"/>
           </div>
        </Link>
        <p className='text-white bg-violet-700 rounded-md px-4 py-1 w-fit absolute top-4 left-4 font-semibold'>
          {blogsData[0].keyword}
        </p>
        <p className='mt-3 text-gray-600 font-semibold my-4'>{blogsData[0].date}</p>
        <Link 
         href={`/blog/${blogsData[0].id}`}
         className='font-bold text-2xl sm:text-3xl hover:text-violet-800 transition-all text-gray-800'
         >
          {blogsData[0].topic}
        </Link>
        <p className='text-gray-700 text-lg font-semibold mt-4'>{blogsData[0].content}</p>
        <Link
         href={`/blog/${blogsData[0].id}`} 
         className='hover:text-black text-violet-700 mt-6 transition-all flex gap-2 items-center font-semibold'
         >
         Read More <BsArrowRightShort size={22}/>
        </Link>
      </div>

      <div className='col-span-6 md:col-span-2 flex flex-col sm:flex-row md:flex-col gap-8 md:gap-2'>
        {blogsData.slice(1,3).filter((item) => {
          return search.toLowerCase() === " " ?
          item :
          item.keyword.toLowerCase().includes(search)
        }).map((recent) => (
          <article className='mb-3 w-full relative'>
            <Link href={`/blog/${recent.id}`} >
              <div className='overflow-hidden group'>
               <Image 
                 src={recent.image} 
                 alt={recent.topic} 
                 className='transform transition-transform rounded-md group-hover:scale-110 duration-300' 
                 />
                </div>
            </Link>
            <p className='text-white bg-violet-700 rounded-md px-4 py-1 w-fit absolute top-4 left-4 font-semibold'>
             {recent.keyword}
            </p>
            <div className='flex justify-between items-center my-2 font-semibold'>
             <p className='text-violet-700'>Recent Post</p>
             <p className='text-gray-700'>{recent.date}</p>
            </div>
            <Link  
             href={`/blog/${recent.id}`} 
             className='hover:text-violet-700 transition-all text-[1.15rem] text-gray-800 font-bold' >
              {recent.topic}
            </Link>
          </article>         
        ))}
      </div>
    </section>
  )
}

export default Posts
