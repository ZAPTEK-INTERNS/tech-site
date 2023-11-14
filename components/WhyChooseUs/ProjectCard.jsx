import Link from 'next/link';
import { cardsData } from '../Home1';
import Image from 'next/image';
import { ButtonLink } from '../links'
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const ProjectCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const nextItems = () => {
    const newIndex = currentIndex + itemsPerPage;
    if (newIndex < cardsData.length) {
      setCurrentIndex(newIndex);
    } else {
      // Start from the top if reaching the end
      setCurrentIndex(0);
    }
  };

  const prevItems = () => {
    const newIndex = currentIndex - itemsPerPage;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    } else {
      // Go to the end if reaching the top
      setCurrentIndex(cardsData.length - itemsPerPage);
    }
  };
  return (
    <section className='my-[120px] mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%]'>
      <div className='grid grid-cols-2 gap-8'>
      {cardsData.slice(currentIndex, currentIndex + itemsPerPage).map((card) => (
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
       <div className="flex space-x-8 mt-4">
       <button onClick={prevItems}  className=" border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3"> <GoArrowLeft width={60} height={60}/> </button>
        <button onClick={nextItems} className=" border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3"> <GoArrowRight width={40} height={60} /> </button>
      </div>
    </section>
  )
}

export default ProjectCard