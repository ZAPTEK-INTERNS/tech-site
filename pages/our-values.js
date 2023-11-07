import { Navbar} from '../components/links'
  import Head from 'next/head';

import Grow from "../components/OurValues/Grow";
import Hero from "../components/OurValues/Hero";
import WhyUs from "../components/OurValues/WhyUs";
import About from "../components/OurValues/About";
import Values from "../components/OurValues/Values";
import Testimonials from "../components/OurValues/Testimonials";
import Build from "../components/OurValues/Build";
import Gradient from "../components/OurValues/Gradient";


const OurValues = () => {
    return ( 
        <>
        <Head> <title> Our Values -Tech </title> </Head>
        <Navbar/>
        <Hero/>
        <Grow/>
        <WhyUs/>
        <About/>
        <Values/>
        <Testimonials/>
        <Gradient >
        <Build/>
        </Gradient>
        </> );
}
 
export default OurValues;