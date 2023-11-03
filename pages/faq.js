import Head from 'next/head'
import {Faq, Getintouch} from '../components/links'


const faq = () => {
  return (
    <div>
      <Head> <title> FAQ - Tech </title> </Head>
       <div className='bg-about bg-center bg-cover bg-no-repeat h-[70vh] w-full'>
        <div className='bg-ourteam bg-center bg-cover bg-no-repeat h-[70vh] w-full'>
        <div className='text-center text-white pt-[100px]'>
          <h1 className='text-4xl sm:6xl lg:text-7xl font-bold lg:leading-[5rem] text-center '>
            Frequently asked questions
          </h1>   
        </div>
       </div>
       </div>
       <Faq/>
       <Getintouch/>
    </div>
  )
}

export default faq
