import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkCard = ({
    Img,
    Title = "Title Here",
    Text = "Text Here",
    URLLink1 = '/',
    LinkName1 = 'First Link',
    URLLink2 = '/',
    LinkName2 = 'Second Link',
}) => {
  return (
    <>
        <div className="w-full px-8 py-10 md:w-1/2" data-aos="fade-up">
            <Link href='/case-studies/xyz-streamlining-operations'>
                <Image src={Img} alt='image here' />
            </Link>
            <h2 className="mb-3 mt-7 md:mt-10 md:mb-4">
                <Link href='/case-studies/xyz-streamlining-operations' className="text-xl font-bold transition-colors duration-300 ease-linear md:text-2xl hover:text-purple-800">{Title}</Link>
            </h2>
            <p className='text-[#7987a1]'>{Text}</p>
            <div className="flex flex-row space-x-3 text-[#8000ff] mt-3">
                <Link href={URLLink1} className='text-lg transition-colors duration-300 ease-linear hover:text-black'>{LinkName1}</Link>
                <span>/</span>
                <Link href={URLLink2} className='text-lg transition-colors duration-300 ease-linear hover:text-black'>{LinkName2}</Link>
            </div>
        </div>
    </>
  )
}

export default WorkCard