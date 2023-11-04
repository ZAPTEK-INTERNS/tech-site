import Link from 'next/link';
import { cardsData } from '.';
import Image from 'next/image';
import { ButtonLink } from '../links'


const Project = () => {
  return (
    <section className='my-[120px] mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%]'>
      <p className='bg-black/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>
        Our Work
      </p>
      <div className='flex mb-8 sm:items-center flex-col sm:flex-row sm:justify-between'>
        <h1 className='text-4xl sm:5xl md:6xl lg:text-7xl font-bold my-6'>Our latest projects</h1>
        <ButtonLink URLLink='case-studies' />
       </div>
 
      <div className='grid grid-cols-2 gap-8'>
       {cardsData.map((card) => (
        <div key={card.id} className="col-span-2 md:col-span-1">
         <div class="group relative overflow-hidden">
           <Image
             height="auto"
             width="auto"
             src={card.image}
             alt=" image"
            className="rounded-lg  h-80 transform transition-transform group-hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
           />
         </div>
         <Link href={`${card.id}`}>
          <p className="font-bold text-3xl hover:text-purple-900 my-4"> {card.title}</p>   
        </Link>
        <p className="font-medium my-2">{card.detail}</p>
        <div className="text-purple-900 font-medium">
          {card.categories.map((category, categoryIndex) => (
            <span key={categoryIndex}>
              <Link href={`/${category.link}`}>{category.name}</Link>
              {categoryIndex < card.categories.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>
        </div>
       ))}
       </div>  
    </section>
  )
}

export default Project