import {itservices} from '.'
import Link from 'next/link'

import { useRouter } from "next/router";

// ...





const Itservices = () => {


const router = useRouter();


  return (
    <section className="mx-[5%] mt-8 w-[90%] pt-[4rem] lg:w-[86%] lg:mx-[7%] flex flex-col items-center mb-[120px]">
      <p
        className={`bg-[#8000FF]/10 text-lg font-semibold w-fit ${router.pathname === "/home3" ? "self-start" : ""
        }  rounded-md px-4 py-2 text-[#8000FF]`}
      >
        Variety solution for IT services
      </p>

      <div className="mt-8 grid grid-cols-2 gap-12">
        {itservices.map((service) => (
          <article
            key={service.id}
            className="my-2 group col-span-2 md:col-span-1"
          >
            <Link
              href="/"
              className="text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-violet-700"
            >
              {service.title}
            </Link>
            <p className="text-lg sm:font-semibold text-gray-500 my-5">
              {service.text}
            </p>
            <div className="border  border-gray-200/40 bg-gray-300/80 w-full">
              <hr className="border group-hover:border-violet-700 transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Itservices