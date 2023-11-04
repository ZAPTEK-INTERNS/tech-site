import Image from 'next/image'
/**
 * A reusable component for rendering Image with content
 * @argument : [{id ,title,body,image}]
 * @
 */
const SideSwitch = ({Data}) => {
  return (
    < >
          {Data.map((card, index) => (
            <div
              key={card.id}
              className="lg:flex py-16 mx-4 font-serif"
            >
              <div  className={`lg:w-1/2  ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}>
                <h2 className="text-7xl font-medium mb-4 ">{card.title}</h2>
                <h3 className=" font-medium mb-4 text-gray-400">{card.body}</h3>
               
              </div>

              <div
                className={`lg:w-1/2   ${
                  index % 2 === 0 ? "lg:order-2  lg:ml-40" : "lg:order-1"
                }`}
              >
                <Image
                  className="object-cover"
                  src={card.image}
                  alt={card.title}
                  width='auto'
                  height='auto'
                />
              </div>
            </div>
          ))}
        </>
  )
}

export default SideSwitch
