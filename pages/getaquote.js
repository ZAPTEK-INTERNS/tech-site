import {GetHero, Form, Countrys} from '../components/links'
import Head from 'next/head'

const getaquote = () => {
  return (
    <div>      
     <Head> <title> Get a quote - Tech </title> </Head>
      <main className="w-full overflow-hidden">
       <GetHero/>
       <Form/> 
        <Countrys/>
      </main>
      
    </div>
  )
}

export default getaquote