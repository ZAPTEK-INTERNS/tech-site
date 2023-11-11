import {blogsData} from './index'
import { Loader } from '../links'
import Image from 'next/image';

const PostDetail = () => {
 const postId = blogsData.post.id


  if (!blogsData.post) {
    return <Loader/>;
  }

  return (
    <section className="mx-[7%] w-[86%] sm:mx-[5%] sm:w-[90%] mb-[60px]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-[60px]">
        {blogsData.post.topic}
      </h1>
      <p className="text-gray-600 text-lg font-semibold my-8">{blogsData.post.date}</p>
      <Image src={blogsData.post.image} alt={blogsData.post.keyword} className='rounded-md'/>
      <h1 className='my-6 pl-3 border-l-4 border-violet-700 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>
        {blogsData.post.quote}
      </h1>
      <p className='text-lg text-gray-600 font-semibold'>{blogsData.post.introduction}</p>
      <div className='my-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-gray-800'>
          Common cybersecurity threats:
        </h1>
        <p className='text-gray-600 text-lg font-semibold'>{blogsData.post.threat}</p>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Phishing Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.phishingAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.phishingAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2'>{strategy}</li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Ransomware:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.ransomware.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.ransomware.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Zero-Day Vulnerabilities:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.zeroDayVulnerabilities.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.zeroDayVulnerabilities.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
              {strategy}
            </li>
          ))}
        </ul>
      </div>

      <div className='my-6'>
        <h1 className='text-3xl font-bold'>IoT Vulnerabilities:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.IoTVulnerabilities.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.IoTVulnerabilities.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Insider Threats:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.insiderThreats.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.insiderThreats.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>DDoS Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.ddosAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.ddosAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
              {strategy}
            </li>
          ))}
        </ul>
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-bold'>Supply Chain Attacks:</h1>
        <p className='text-gray-600 text-lg font-semibold my-3'>
          {blogsData.post.supplyChainAttacks.description}
        </p>
        <ul className='list-disc'>
          {blogsData.post.supplyChainAttacks.defenseStrategies.map((strategy) => (
            <li className='text-gray-600 text-lg font-semibold my-2' key={strategy}>
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