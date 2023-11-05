import React from 'react'
import ArrowBtn from './ArrowBtn'
import Link from 'next/link'
import Image from 'next/image'
import FolderImg from '../../public/images/secutity.webp'
import FolderImgTransparent from '../../public/images/security2.webp'

const Folder = ({
    Title = "Title Here",
    TitleLink = "/",
    Text = "Description Here",
    Icon,
    BgTransparent = false,
}) => {
    const TransparentTitle = 'text-2xl font-bold text-white transition-colors duration-150 ease-linear hover:text-black';
    const NonTransparentTitle = 'text-2xl font-bold text-black transition-colors duration-150 ease-linear hover:text-[#8000ff]';
    const TransparentText = "md:text-sm text-base font-semibold text-white";
    const NonTransparentText = "md:text-sm text-base font-semibold text-[#7987a1]";
    const TransparentBtnClr = "text-white";
    const NonTransparentBtnClr = "text-[#8000ff]";
  return (
    <>
    <div className='relative flex' data-aos="fade-up">
        <div className='z-50 px-4 pt-10 md:w-64'>
            <div className='bg-[#8912ff] p-3 inline-block border-[1px] border-[rgba(255,255,255,0.3)] rounded'>
                {Icon}
            </div>
            <br />
            <div className='md:w-3/4'>
                <Link href={TitleLink} className={BgTransparent ? NonTransparentTitle : TransparentTitle}>{Title}</Link>
            </div>
            <br />
            <p className={BgTransparent ? NonTransparentText : TransparentText}>{Text}</p>
            <ArrowBtn hTextColor='hover:text-black' bgColor='bg-transparent' hBgColor='hover:bg-transparent' btnLink={TitleLink} textColor={BgTransparent ? NonTransparentBtnClr : TransparentBtnClr} />
        </div>
        { BgTransparent ? <Image src={FolderImgTransparent} alt="" className='absolute w-full h-80 md:h-full t-0' /> : <Image src={FolderImg} alt="" className='absolute w-full h-80 md:h-full t-0' /> }
    </div>
    </>
  )
}

export default Folder