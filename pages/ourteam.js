import {TeamHero, TeamCards, Getintouch, Video} from '../components/links'
import Head from 'next/head';

const ourteam = () => {
  return (
    <div>
      <Head> <title> Our Team - Tech </title> </Head>
      <TeamHero/>
      <TeamCards/>
      <Video/>
      <Getintouch/>
    </div>
  )
}

export default ourteam