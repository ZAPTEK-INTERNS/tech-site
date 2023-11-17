import React from "react";
import { Navbar} from '../components/links'
import Head from 'next/head';
import Hero from "../components/Home2/Hero";
import Clients from "../components/Home2/Clients";
import About from "../components/Home2/About";
import Service from "../components/Home2/Service";

import Gradient from "../components/OurValues/Gradient";
import Build from "../components/OurValues/Build";
import Who from "../components/Home2/Who";
import Testimonial from "../components/Home2/Tesimonial";
import Work from "../components/WhyChooseUs/Work";
import Variety from "../components/Home2/Variety";

const home2 = () => {
  return (
    <div className="w-[100%] overflow-hidden">
      <Navbar/>
      <Hero />
      <Clients />
      <About/>
      <Who/>
      <Service/>
      <Variety/>
      <Testimonial/>
      <Work/>
      <Gradient>
        <Build />
      </Gradient>
    </div>
  );
};

export default home2;
