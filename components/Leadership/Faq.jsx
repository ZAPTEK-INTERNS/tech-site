import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'

const faqs = [
  {
    question:"How do i get started with your consulting and services?",
    answer: "To begin, please reach out to us via our contact form or phone number on our website. We'll schedule an initial consultation to discuss your specific requirements and create a tailored strategy for your business."
  },
  {
    question:"Can you provide examples of Succesful projects or case studies?",
    answer: "Yes, we can provide references and case studies upon request. Feel free to contact us for more information."
  },
  {
    question:"What type of custom software Development do you offer?",
    answer: "We provide custom software development services tailored to your specific needs. Whether you need a web application, mobile app, or enterprise software, we can design, develop, and maintain the software solution that aligns with your business goals."
  },
  {
    question:"What kind of Cybersecurity Solutions do you provide?",
    answer: "Our Cybersecurity Solutions encompass a range of services, including risk assessments, security audits, threat detection and response, and employee training. We help protect your data, systems, and networks from cyber threats and breaches."
  }
]

const Faq = () => {
    const [toggle, setToggle] = useState(new Array(faqs.length).fill(false));

    const handleToggle = (index) => {
      const newToggles = [...toggle];
      newToggles[index] = !newToggles[index];
      setToggle(newToggles);
    };

  return (
    <section className='mx-[3%] w-[94%] lg:w-[86%] lg:mx-[7%] mt-[100px] grid grid-cols-6'>
      <div className='col-span-6 md:col-span-2'>
       <h3 className='bg-violet-700/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>FAQ</h3>
       <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold my-4'>The most common questions</h1>
      </div>
      <div className='col-span-6 md:col-span-4 w-full flex flex-col'>
        {faqs.map((faq, index) => (
            <article key={index} className='bg-violet-300/10 py-4 px-6 my-3 rounded-md border border-gray-200 text-gray-800'>
              <div className='flex justify-between items-center cursor-pointer'>
               <h1 className='text-[1.2rem] sm:text-[1.6rem] font-bold' onClick={() => handleToggle(index)}>{faq.question}</h1>
                <div onClick={() => handleToggle(index)} className='border border-gray-300 rounded-md p-2 text-black font-bold'>
                  {toggle[index] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </div>
              </div>
               {toggle[index]  && <p className='text-lg font-semibold text-gray-500 mt-4'>{faq.answer}</p>}
            </article>
        ))}
      </div>
    </section>
  )
}

export default Faq
