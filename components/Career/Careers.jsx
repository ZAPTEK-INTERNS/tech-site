import { joblist } from "."
import Link from 'next/link'


const Careers = () => {
  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] mt-[10px]'>
      <div className="flex items-center justify-center flex-col">
       <h4 className='text-center text-violet-800 my-4 text-lg font-semibold bg-violet-500/10 rounded-md py-2 px-4 w-fit'>
        Careers list
       </h4>
       <h1 className='text-4xl sm:text-5xl text-center text-black/80 font-bold mb-8 '>
        Currently available<br className='hidden md:block'/> positions at Tech
       </h1>
      </div>

      <div className="flex flex-col">
        {joblist.map((job) => (
            <article key={job.id} 
             className="flex flex-col gap-4 md:flex-row justify-between items-center bg-violet-100/50 rounded-md px-6 py-8 w-full my-4 border border-gray-200">
              <Link href={`/career/${job.id}`} className="text-3xl font-bold text-gray-700 hover:text-violet-800 transition-all">
                {job.title}
              </Link>
              <p className="font-semibold text-gray-700 text-xl">{job.location}</p>
              <p className="font-semibold text-gray-700 text-xl">{job.jobtype}</p>
              <Link href={`/career/${job.id}`} className="text-lg bg-violet-700 p-3 rounded-3xl text-white font-semibold transition-all hover:bg-white hover:text-black border border-violet-600">
                Apply Now
             </Link>
            </article>
        ))}
      </div>
    </section>
  )
}

export default Careers