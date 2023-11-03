import Head from 'next/head'
import {Hero, Clients, AboutSection, Services} from '../components/links'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech site</title>    
      </Head>

      <main>
        <Hero /> 
        <Clients/>  
        <AboutSection/>
        <Services/>
      </main>
    </div>
  );
}
