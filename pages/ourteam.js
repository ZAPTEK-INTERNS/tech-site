import {TeamHero, TeamCards, Getintouch, Video, Faq} from '../components/links'
import Head from 'next/head';

const ourteam = () => {
  return (
    <div>
      <Head> <title> Our Team - Tech </title> </Head>
      <TeamHero/>
      <TeamCards/>
      <Video/>
      <Faq/>
      <Getintouch/>
    </div>
  )
}

export default ourteam