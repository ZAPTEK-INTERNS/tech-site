import {blogsData} from './index'
import { Loader } from '../links'
import Image from 'next/image';

const PostDetail = () => {


  if (!blogsData[0]) {
    return <Loader/>;
  }

  return (
    <section className="mx-[7%] w-[86%] sm:mx-[5%] sm:w-[90%] mb-[60px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-[60px]" >
        {blogsData[0].topic}
      </h1>
      <p className="text-gray-600 text-lg font-semibold my-8">{blogsData[0].date}</p>
      <Image src={blogsData[0].image} alt={blogsData[0].keyword} className='rounded-md' data-aos="fade-up"/>
      <h1 data-aos="fade-up"
       className='my-6 pl-3 border-l-4 border-violet-700 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>
        {blogsData[0].quote}
      </h1>
      <p className='text-lg text-gray-600 font-semibold' data-aos="fade-up">
        {blogsData[0].introduction}
      </p>
      <div className='my-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-gray-800' data-aos="fade-up">
          Common cybersecurity threats:
        </h1>
        <p className='text-gray-600 text-lg font-semibold' data-aos="fade-up">
          {blogsData[0].threat}
        </p>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Phishing Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].phishingAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].phishingAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Ransomware:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData[0].ransomware.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].ransomware.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Zero-Day Vulnerabilities:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].zeroDayVulnerabilities.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].zeroDayVulnerabilities.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>

      <div className='my-6'>
        <h1 className='text-3xl font-bold'>IoT Vulnerabilities:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].IoTVulnerabilities.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].IoTVulnerabilities.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Insider Threats:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].insiderThreats.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].insiderThreats.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>DDoS Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].ddosAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].ddosAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Supply Chain Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3' data-aos="fade-up">
          {blogsData[0].supplyChainAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData[0].supplyChainAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy} data-aos="fade-up">
              {strategy}
            </li>
          ))}
        </ul>
      </div>

    {/*}  <Navigation id ={postId} data={blogsData.post}/>*/}
    </section>
  )
}

export default PostDetail