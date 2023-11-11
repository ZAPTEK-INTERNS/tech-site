import { useRouter } from "next/router";
import React from "react";
import { servicelist } from "../../components/ServicesDetail/constant";
import { Git, Navbar, Projects } from "../../components/links";
import Image from "next/image";
import { check, service2 } from "../../public/links";
import Process from "../../components/Services/Process";
import Head from "next/head";

const ServiceDetails = () => {
  const router = useRouter();
  const serviceId = router.query.id;
  const newId = parseInt(serviceId);

  const service = servicelist.find((job) => job.id === newId);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        {" "}
        <title> Services-Tech </title>{" "}
      </Head>
      <Navbar />
      <div className="bg-[#1a0533] h-[50vh] mt-[-2rem] lg:mt-0  mb-4 items-center bg-news1 flex flex-col justify-center">
        <h1 className="text-5xl text-white font-bold">{service.title}</h1>
        <p className="text-white text-center pt-4 text-lg font-semibold w-10/12">
          {service.about}
        </p>
      </div>

      <section className="mb-8">
        <div className="mx-2 lg:px-4">
          <h1 className="text-4xl pb-8 font-bold">{service.description}</h1>
          <p className="font-semibold text-slate-500">{service.describe}</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Image src={service2} className="px-4 lg:w-1/2 py-16 lg:rounded-3xl" />

          <div className="mx-4 my-8">
            <ul className=" flex flex-col py-8 gap-8 ">
              {service.track.map((track) => (
                <li key={service.id} className="flex gap-2 pb-4 border-b">
                  <span>
                    <Image src={check} />
                  </span>
                  <p className="text-2xl font-bold">{track}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-8 mb-16">
          <h1 className="text-4xl font-bold pb-4">Benefits</h1>
          {service.benefits.map((benefit) => (
            <li key={service.id} className="flex gap-2">
              <span className="text-lg font-bold text-violet-600">•</span>
              <h2 className="text-slate-500/100   font-bold">
                {benefit.title}
                <span className="text-slate-400 pl-2 font-semibold">
                  {benefit.description}
                </span>
              </h2>
            </li>
          ))}
        </div>

        <Process />

        <Projects />
        <div className="mb-[-2rem]">
          <Git />
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
