import Image from "next/image"

const testimoniallist=[
    {
        body: "I cannot recommend Tech enough! Their team went above and beyond to understand our unique business needs and delivered a custom software solution that has streamlined our operations and boosted productivity." ,
        name : "Kaylynn Westervelt"
    },
    {
        body: "We were blown away by Tech's expertise! Their commitment to delivering a customized software solution tailored to our needs has had a remarkable impact on our operations, leading to increased efficiency and profitability." ,
        name : "William Harris"
    },
    {
        body: "I couldn't be happier with Tech's services! Their team's dedication to creating a personalized software solution has made a significant difference in our day-to-day operations, driving efficiency and growth" ,
        name : "Ava Brown"
    }
]

const Testimonials = () => {
  return (
    <div className="md:mx-16 mx:4 my-8">
         <div data-aos="fade-up" className="flex justify-center md:flex-none md:justify-normal my-4">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          Testimonials
        </div>
      </div>
      <div className="lg:flex lg:justify-between space-y-8 ">
      <p data-aos="fade-up" className="text-center lg:text-start text-5xl lg:7xl font-bold lg:w-[40%]">Happy customers say about us</p>
<div className="flex justify-center h-fit ">

      <button data-aos="fade-up" className="bg-purple-900 px-4 py-2 flex justify-center content-center space-x-12 rounded-full text-white group hover:text-black hover:border hover:border-purple-900 hover:bg-transparent lg:mt-8"> <p>View All</p> <div className="p-1 rounded-full  h-fit w-fit bg-white my-2 group-hover:bg-black "></div></button>
</div>

      </div>

<div className="space-y-8 lg:space-y-0 my-8 grid lg:grid-cols-3 gap-4 justify-center">
    { testimoniallist.map((item,idx)=>(
<div data-aos="fade-up" key={idx} className="space-y-8 bg-slate-200/30 rounded-md border border-slate-400 p-8 w-[350px] ">
    
<Image src="https://assets-global.website-files.com/64f99a189bbe4d7717201680/64fb32deb101691b78c366de_start.svg" alt="img" width={50} height={50}/>

    <p>" {item.body}" </p>
    <p className="text-violet-900 font-medium">{item.name}</p>

</div>

    ))
}
</div>

    </div>
  )
}

export default Testimonials
