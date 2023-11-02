import {TeamHero, TeamCards} from '../components/links'
import Head from 'next/head';

const ourteam = () => {
  return (
    <div>
      <Head> <title> Our Team - Tech </title> </Head>
      <TeamHero/>
      <TeamCards/>
    </div>
  )
}

export default ourteam