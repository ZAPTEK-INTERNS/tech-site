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
    <div>
         <div className="flex justify-center md:flex-none md:justify-normal mx-4">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          Testimonials
        </div>
      </div>
      <p>Happy customers say about us</p>

      <button></button>

<div>
    { testimoniallist.map((item,idx)=>(
<div key={idx} className="space-y-8 bg-gray-200 ">
    
    <p>Stars</p>
    <p>{item.body}</p>
    <p className="text-violet-900">{item.name}</p>

</div>

    ))
}
</div>

    </div>
  )
}

export default Testimonials
