import {member1, member2, member3, member4, member5, member6, member7, member8} from '../../public/links'
import Image from 'next/image'
import {FaFacebookF, FaXTwitter, FaInstagram} from 'react-icons/fa6'

const members = [
  {
    image:member1,
    name:"Alan Cooper",
    position:"Analyst"
  },
   {
    image:member5,
    name:"Brooklyn Simmons",
    position:"Director"
  },
  {
    image:member6,
    name:"Theresa Webb",
    position:"Analyst"
  },
  {
    image:member7,
    name:"Marvin McKinney",
    position:"Developer"
  },
 
]

const TeamCards = () => {
  return (
    <section className='px-[3%] w-[100%] lg:w-[100%] lg:px-[5%] pt-[100px] sm:pt-[180px] md:pt-0 bg-white'>
        <div className="md:flex md:justify-between py-12">
            <p className='text-3xl md:text-5xl font-bold'>Executive Team</p>
            <p className='md:w-[40%] font-medium'>Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients.</p>
        </div>
      <div className='grid grid-cols-12 gap-6'>
       {members.map((member, index) => (
         <article key={index} className='relative col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 py-12'>
           <Image src={member.image} alt="team member" className='rounded-md h-[24rem] w-full'/>
            <div className='absolute right-8 bottom-36'>
              <FaFacebookF size={35} className='text-white bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer'/>
              <FaInstagram size={35} className='text-white my-2 bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer'/>
              <FaXTwitter size={35} className='text-white bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer'/>
            </div>
            <h1 className='text-2xl font-bold text-black/80 mt-3'>{member.name}</h1>
            <p className='text-lg text-black/60 font-semibold mb-3'>{member.position}</p>
         </article>
       ))}
      </div>
    </section>
  )
}

export default TeamCards
