import {
  TeamHero, 
  TeamCards, 
  Getintouch, 
  Video, 
  Faq, 
  Navbar
} 
 from '../components/links'
import Head from 'next/head';

const ourteam = () => {
  return (
    <div>
      <Head> <title> Our Team - Tech </title> </Head>
      <Navbar/>
      <main>
       <TeamHero/>
       <TeamCards/>
       <Video/>
       <Faq/>
       <Getintouch/>
      </main>
    </div>
  )
}

export default ourteam