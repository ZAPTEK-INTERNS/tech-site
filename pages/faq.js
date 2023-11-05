import Head from 'next/head'
import {Faq, Getintouch, Navbar} from '../components/links'


const faq = () => {
  return (
    <div>
      <Head> <title> FAQ - Tech </title> </Head>
       <div className='bg-about bg-center bg-cover bg-no-repeat h-[70vh] w-full'>
        <div className='bg-ourteam bg-center bg-cover bg-no-repeat h-[70vh] w-full'>
          <Navbar/>
        <div className='text-center text-white pt-[100px]' data-aos="fade-up">
          <h1 className='text-4xl sm:6xl lg:text-7xl font-bold lg:leading-[5rem] text-center '>
            Frequently asked questions
          </h1>   
        </div>
       </div>
       </div>
       <main className='w-full overflow-hidden'>
         <Faq/>
         <Getintouch/>
       </main>
       
    </div>
  )
}

export default faq
