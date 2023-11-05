<<<<<<< HEAD:components/Home1/Projects.jsx
import Link from "next/link";
import { cardsData } from ".";
import Image from "next/image";
=======
import Link from 'next/link';
import { cardsData } from '.';
import Image from 'next/image';
import { ButtonLink } from '../links'
>>>>>>> ba50b5bd7272638426f8c16f4f44b773bbcecc76:components/Home1/Project.jsx


const Project = () => {
  return (
    <section className="my-[120px] mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%]">
      <p className="bg-[#8000FF]/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-[#8000FF]">
        Our Work
      </p>
<<<<<<< HEAD:components/Home1/Projects.jsx
      <div className="flex mb-8 sm:items-start md:items-center md:flex-row flex-col sm:flex-col sm:justify-between">
        <h1 className="text-4xl sm:5xl md:6xl lg:text-7xl font-bold my-6">
          Our latest projects
        </h1>
        <Link
          className=" bg-[#8000FF] text-white p-3 rounded-3xl w-[12rem] flex items-center gap-6 justify-between hover:text-black hover:bg-white font-semibold transition-all duration-500 border border-violet-700"
          href="/"
        >
          <span>View More</span>
          <span className="font-bold">●</span>
=======
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
>>>>>>> ba50b5bd7272638426f8c16f4f44b773bbcecc76:components/Home1/Project.jsx
        </Link>
      </div>

<<<<<<< HEAD:components/Home1/Projects.jsx
      <div className="grid grid-cols-2 gap-8">
        {cardsData.map((card) => (
          <div key={card.id} className="col-span-2 md:col-span-1">
            <div className="group relative overflow-hidden">
              <Image
                height="auto"
                width="auto"
                src={card.image}
                alt=" image"
                className="rounded-lg  h-80 transform transition-transform group-hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
              />
            </div>
            <Link href={`${card.id}`}>
              <p className="font-bold text-3xl hover:text-purple-900 my-4">
                {" "}
                {card.title}
              </p>
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
  );
};

export default Projects;
=======
export default Project
>>>>>>> ba50b5bd7272638426f8c16f4f44b773bbcecc76:components/Home1/Project.jsx
