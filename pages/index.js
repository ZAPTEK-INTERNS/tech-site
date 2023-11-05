import Head from 'next/head'

import {
  HomeHero, 
   Clients, 
   AboutSection, 
   Services, 
   Itservices, 
   Git, 
   Project,
   Testimonials,
   Build
  } from '../components/links'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home 1 - Tech</title>    
      </Head>
      <main className='w-full overflow-hidden'>
        <HomeHero /> 
        <Clients/>  
        <AboutSection/>
        <Services/>
        <Itservices/>
        <Git/>
        <Project/>
        <Testimonials/>
        <Build/>
      </main>
    </div>
  );
}
