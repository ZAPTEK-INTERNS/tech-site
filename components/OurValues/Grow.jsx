import Image from "next/image"


import B from '../../public/images/white-logo5.svg'
import L from '../../public/images/white-logo7.svg'
import F from '../../public/images/white-logo8.svg'
import S from '../../public/images/white-logo9.svg'
import G from '../../public/images/white-logo1.svg'
import N from '../../public/images/white-logo6.svg'

const images = [
  {
    img: B
  },
  {
    img: L
  },
  {
    img: F
  },
  {
    img: S
  },
  {
    img: G
  },
  {
    img: N
  },
]

const Grow = () => {
  return (
    <div className="bg-violet-900 py-12 px-8 md:flex md:px-16">
      <div className="md:w-1/4 text-white text-3xl font-bold">
Market leaders use Tech to grow
      </div>
      <div className="md:w-2/4 grid grid-cols-2 md:grid-cols-3">
{
  images.map((item,idx)=>(
    <Image src={item.img} alt="img" width="auto" height="auto"/>
  ))
}
      </div>
    </div>
  )
}

export default Grow
