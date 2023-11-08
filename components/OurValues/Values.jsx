

const Values = () => {
  return (
    <div className="md:mx-16 mx-2">
        <h2 data-aos="fade-up" className="text-5xl font-bold my-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div data-aos="fade-up" className="bg-slate-200/30 border border-slate-400  rounded-md p-8 w-fit   space-y-8"  >
          <h2 className="font-medium text-4xl">Client-Centricity</h2>
          <p className=" text-gray-500 text-sm">Our clients are at the heart of everything we do. We prioritize your needs</p>

      </div>

      <div data-aos="fade-up" className="bg-purple-900 rounded-md p-8 w-fit  text-white  space-y-8">
              <h2 className=" font-medium text-4xl">Innovation</h2>
              <p className="text-sm">You'll work on exciting projects and leverage cutting-edge evolving technologies</p>

          </div>

          <div data-aos="fade-up" className="bg-slate-200/30 border border-slate-400 rounded-md p-8 w-fit    space-y-8">
              <h2 className=" font-medium text-4xl">Team Spirit</h2>
              <p className="text-gray-500 text-sm">Our team is like a family. We believe in teamwork and mutual support</p>

          </div>
        </div>
    
   
          </div>
  )
}

export default Values
