import {post, recentPosts} from './index'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRightShort} from 'react-icons/bs'

const Posts = () => {
  return (
    <section className='w-[90%] mx-[5%] lg:w-[86%] lg:mx-[7%] grid grid-cols-6 gap-8 mb-[100px]'>
      <div className='col-span-6 md:col-span-4'>
        <Link href={`/blog/${post.id}`}>
          <Image src={post.image} className='rounded-md' alt="blog 1"/>
        </Link>
        <p className='mt-3 text-gray-600 font-semibold my-4'>{post.date}</p>
        <Link 
         href={`/blog/${post.id}`}
         className='font-bold text-2xl sm:text-3xl hover:text-violet-800 transition-all text-gray-800'
         >
          {post.topic}
        </Link>
        <p className='text-gray-700 text-lg font-semibold mt-4'>{post.content}</p>
        <Link
         href={`/blog/${post.id}`} 
         className='hover:text-black text-violet-700 mt-6 transition-all flex gap-2 items-center font-semibold'
         >
         Read More <BsArrowRightShort size={22}/>
        </Link>
      </div>

      <div className='col-span-6 md:col-span-2 flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-8 md:gap-2'>
        {recentPosts.map((recent) => (
          <article className='mb-3 w-full'>
            <Link href={`/blog/${post.id}`} >
               <Image src={recent.image} alt={recent.topic} className='rounded-md'/>
            </Link>
            <div className='flex justify-between items-center my-2 font-semibold'>
             <p className='text-violet-700'>Recent Post</p>
             <p className='text-gray-700'>{recent.date}</p>
            </div>
            <Link  
             href={`/blog/${post.id}`} 
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
