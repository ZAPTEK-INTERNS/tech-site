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
    image:member2,
    name:"Jenn Somgerr",
    position:"Analyst"
  }, 
  {
    image:member3,
    name:"Sophia Rodriguez",
    position:"Designer"
  },
   {
    image:member4,
    name:"Jane Cooper",
    position:"CEO of Fintech128"
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
  {
    image:member8,
    name:"Vaughn Stehr",
    position:"Designer"
  }
]

const TeamCards = () => {
  return (
    <section className='mx-[3%] w-[94%] lg:w-[90%] lg:mx-[5%] mt-[100px] sm:mt-[180px] md:mt-8'>
      <div className='grid grid-cols-12 gap-6'>
       {members.map((member, index) => (
         <article key={index} className='relative col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
           <Image src={member.image} alt="team member" className='rounded-md h-[24rem] w-full'/>
            <div className='absolute right-8 bottom-24'>
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
