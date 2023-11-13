import Link from "next/link";
import { BsArrowRightShort,BsArrowLeftShort,BsBorderAll } from "react-icons/bs";


const Navigation = ({ id, data }) => {

    
    // Find the index of the item in the data array
    const currentIndex = data.findIndex((item) => item.id === id);
  
    // Calculate the index of the previous and next items with modulus
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    const nextIndex = (currentIndex + 1) % data.length;
  
    // Get the  previous, and next items
    const prevItem = data[prevIndex];
    const nextItem = data[nextIndex];


  return (
    <>
    <div data-aos="zoom-in" className="md:flex my-20 ">
      <div className="md:w-2/5 border border-slate-400 flex justify-center item-center">
        <div className="py-12 hover:text-purple-900 font-medium group flex">
        <BsArrowLeftShort size={30} className='transition-all group-hover:mr-4'/>
          <Link href={`/blog/${prevItem.id}`}>{prevItem.topic.slice(0, 30)}</Link>
        </div>
      </div>
      <div className="md:w-1/5 border border-slate-400  flex justify-center item-center">
        <div className="my-12 bg-purple-900 text-white">
        <BsBorderAll size={30} className='transition-all group-hover:mr-4'/>
        </div>
      </div>
      <div className="md:w-2/5 border border-slate-400  flex justify-center item-center">
        <div className="py-12 hover:text-purple-900 font-medium group flex">
          <Link href={`/blog/${nextItem.id}`}>{nextItem.topic.slice(0, 30)}</Link>
          <BsArrowRightShort size={30} className='transition-all group-hover:ml-2'/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navigation