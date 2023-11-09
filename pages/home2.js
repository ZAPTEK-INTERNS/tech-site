import React from "react";
// import {Navbar} from '../components/links';
import Hero from "../components/Home2/Hero";
import Clients from "../components/Home2/Clients";
import About from "../components/Home2/About";
import Service from "../components/Home2/Service";

import Gradient from "../components/OurValues/Gradient";
import Build from "../components/OurValues/Build";

const home2 = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Clients />
      <About/>
      <Service/>
      <Gradient>
        <Build />
      </Gradient>
    </div>
  );
};

export default home2;
