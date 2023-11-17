import { Navbar} from '../components/links'
  import Head from 'next/head';
import About from "../components/AboutUs/About";
import Better from "../components/AboutUs/Better";
import Build from "../components/AboutUs/Build";
import Culture from "../components/AboutUs/Culture";
import Work from "../components/AboutUs/Work";
import {Testimonials} from "../components/links";
import TeamCards from "../components/AboutUs/TeamCards";
import Excellence from "../components/AboutUs/Excellence";

const AboutUs = () => {
  return (
    <><Head> <title> About Us -Tech </title> </Head><Navbar /><div className="bg-[url('../public/images/about1.webp')] bg-fixed bg-cover bg-center ">
      <About />
      <Culture />
      <Better />
      <Excellence />
      <TeamCards />
      <Build />
      <Work />
      <Testimonials />
    </div></>
  );
};

export default AboutUs;
