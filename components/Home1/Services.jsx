import {services} from '.'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%]'>
     <div>
       {services.map((service) => (
         <article key={service.id}>
           <Image src={service.icon} alt="icon"/>
           <Link href={`/services/${service.id}`}>{service.title}</Link>
           <p>{service.text}</p>
           <Link href={`/services/${service.id}`}>Learn More</Link>
         </article>
       ) )}
     </div>
    </section>
  )
}

export default Services