import {blogs} from './index'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRightShort} from 'react-icons/bs'

const Blogs = () => {
  return (
    <section className='mx-[7%] w-[86%] sm:mx-[4%] sm:w-[92%] grid grid-cols-6 gap-8'>
       {blogs.map((blog)=> (
        <article id={blog.id} className='col-span-6 md:col-span-3 lg:col-span-2 relative'>
         <Link href={`/blog/${blog.id}`} className=''>
          <div className='overflow-hidden group'>
            <Image 
             src={blog.image} 
             className='rounded-md group-hover:scale-110 duration-300 h-[230px]' 
             alt="blog 1"/>
           </div>
         </Link>

         <p className='text-white bg-violet-700 rounded-lg px-4 py-1 w-fit absolute top-4 left-4 font-semibold'>
           {blog.keyword}
         </p>
        <p className='mt-3 text-gray-600 font-semibold my-4'>{blog.date}</p>
         <Link 
          href={`/blog/${blog.id}`}
          className='font-bold text-xl sm:text-2xl hover:text-violet-800 transition-all text-gray-800'
          >
           {blog.topic}
          </Link>
        <p className='text-gray-700 text-lg font-semibold mt-4'>{blog.content}</p>

        <Link
          href={`/blog/${blog.id}`} 
          className='hover:text-black text-violet-700 mt-6 transition-all flex gap-2 items-center font-semibold'
         >
          Read More <BsArrowRightShort size={22}/>
        </Link>
        </article>
       ))}
    </section>
  )
}

export default Blogs