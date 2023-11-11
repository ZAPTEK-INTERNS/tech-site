import Image from "next/image"


import B from '../../public/images/cup.webp'
import L from '../../public/images/gears.webp'
import F from '../../public/images/message.webp'


const images = [
  {
    img: B,
    content : "Experience expert team"
  },
  {
    img: L,
    content : "Customized solutions"
  },
  {
    img: F,
    content : "Transparent communication"
  },
 
]

const Sponsors = () => {
  return (
    <div className="bg-violet-900 py-12 px-8 md:flex md:px-16">
      <div data-aos="fade-up"className=" lg:flex justify-between grid grid-cols-2 space-x-2">
{
  images.map((item,idx)=>(
    <div key={idx} className="flex space-x-4">
        <Image src={item.img} alt="img" width={80} height={80}/>
<p className="w-40 font-bold text-white text-xl">{item.content}</p>
    </div>
  ))
}
      </div>
    </div>
  )
}

export default Sponsors
