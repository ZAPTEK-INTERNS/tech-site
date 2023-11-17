import Head from 'next/head';
import { Home4Banner, Home4AboutSection, Home4HelpSection, Home4TestimonialSection, Home4WorkSection } from '../components/home4';
import { Navbar } from '../components/links';


const Home4 = () => {
  return (
    <div>

      <Head> <title> Home 4 - Tech </title> </Head>

      <Navbar />

      <Home4Banner />

      <Home4HelpSection />

      <Home4AboutSection />

      <Home4WorkSection />

      <Home4TestimonialSection />
 
    </div>
  )
}

export default Home4