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
        <title>Tech site</title>    
      </Head>
      <main>
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
