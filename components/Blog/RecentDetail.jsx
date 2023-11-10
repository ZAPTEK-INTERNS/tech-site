import {blogsData} from './index'
import {useRouter} from 'next/router';
import {Loader} from '../../components/links'
import Image from 'next/image';

const RecentDetail = () => {
  const router = useRouter();
  const postId = router.query.id;
  const newId = parseInt(postId) 
  
  const post = blogsData.recentPosts.find((post) => post.id === newId);
  
  if(!post) return <Loader/>

  return (
    <section className='mx-[7%] w-[86%] sm:mx-[5%] sm:w-[90%] mb-[60px]'>
       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-[60px]">
         {post.topic}
       </h1>
       <p className="text-gray-600 text-lg font-semibold my-8">{post.date}</p>
      <Image src={post.image} alt={post.keyword} className='rounded-md w-full h-[50vh] sm:h-[70vh] md:h-[70vh] lg:h-[90vh]'/>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 my-4">
        {post?.title}
      </h1>
      <p className="text-gray-700 text-lg font-semibold my-6">{post.introduction}</p>
     
      {
        post.sections.map((section)=> (
          <div className='my-5 text-gray-800'>
           <h3 className='text-2xl sm:text-3xl font-bold '>{section.title}</h3>
           <p className='text-lg font-semibold mt-3 text-gray-700'>
            {section.content}
            </p>
          </div>
        ))
      }
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl border-l-4 pl-3 text-gray-800 border-violet-700 my-10'>
        {post?.middleqoute}
      </h1>

      {
        post.benefits.map((benefit)=> (
          <div className='my-5 text-gray-800'>
           <h3 className='text-2xl sm:text-3xl font-bold '>{benefit.title}</h3>
           <p className='text-lg font-semibold mt-3 text-gray-700'>
            {benefit.content}
            </p>
          </div>
        ))
      }

      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl border-l-4 pl-3 text-gray-800 border-violet-700 my-10'>
        {post?.lastquote}
      </h1>
      <p className='text-lg font-semibold mt-3 text-gray-700'>
        {post?.section7}
      </p>
      <div className='mt-12'>
        <h3 className='text-2xl sm:text-3xl font-bold '>
          {post.conclusion.heading}
        </h3>
        <ul>
          {post.conclusion?.content.map((content)=> (
            <li className='text-lg font-semibold mt-3 text-gray-700'>
              {content}
            </li>
          ))}
        </ul>
      </div>

      {/*<Navigation id ={newId} data={blogsData.recentPosts}/>*/}
    </section>
    )
}

export default RecentDetail