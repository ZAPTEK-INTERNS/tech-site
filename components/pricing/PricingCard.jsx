import Link from 'next/link'
import React from 'react'
import { BsFileEarmarkBreak } from 'react-icons/bs'

const PricingCard = ({
    Tag = "",
    Type = "Type Here", 
    Text = "Text Description Here", 
    Price = 50,
    DurationSub = "Up to",
    URLLink = "/", 
    URLName = "LinkName", 
    InvertCard = false,
}) => {
    
    let CardStyleDef = "w-full px-8 py-10 border-2 space-y-5 border-gray-400 rounded-3xl bg-[#fcf8ff] transition-transform ease-linear duration-200 hover:-translate-y-8";
    let CardStyleInv = "w-full px-8 py-10 border-2 space-y-5 border-gray-400 rounded-3xl bg-[#2b1343] transition-transform ease-linear duration-200 hover:-translate-y-8";
    {Tag.length == 0 ? "" : CardStyleDef.concat(" h-120%") && CardStyleInv.concat(" h-120%")}

    const typeStyleDef = "text-2xl md:text-4xl font-bold text-[#180030] tracking-tighter text-center";
    const typeStyleInv = "text-2xl md:text-4xl font-bold text-white tracking-tighter text-center";
    
    const textStyleDef = "text-[#7987a1] text-center";
    const textStyleInv = "text-white text-center";

    const pricingStyleDef = "font-bold text-[#180030] tracking-tighter";
    const pricingStyleInv = "font-bold text-white tracking-tighter";

    const listIconStyleDef = "inline-flex items-center justify-center w-8 h-8 rotate-45 bg-[#8000ff] rounded-full text-white";
    const listIconStyleInv = "inline-flex items-center justify-center w-8 h-8 rotate-45 bg-[#554269] rounded-full text-white";
    
    const listTextStyleDef = "text-[#7987a1]";
    const listTextStyleInv = "text-white";

    const linkStyleDef = "w-full block bg-[#8000ff] py-3 px-6 rounded-3xl text-center text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black";
    const linkStyleInv = "w-full block bg-white py-3 px-6 rounded-3xl text-center text-black text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-[#8000ff] hover:text-white";
    
    const captionStyleDef = "text-xl font-bold text-[#180030]";
    const captionStyleInv = "text-xl font-bold text-white";
    
  return (
    <div className={InvertCard ? CardStyleInv : CardStyleDef}>
        <center>
            {Tag.length == 0 ? "" : <div className='text-white bg-[#554269] rounded-full py-2 px-4 inline-block'>{Tag}</div>}
        </center>
        <h2 className={InvertCard ? typeStyleInv : typeStyleDef}>{Type}</h2>
        <p className={InvertCard ? textStyleInv : textStyleDef}>{Text}</p>
        <h2 className={InvertCard ? pricingStyleInv : pricingStyleDef}>
            <sup className='text-xl'>$</sup>
            <span className='text-3xl md:text-5xl'>{Price}</span>
            <sub className='text-xl'>/{DurationSub}</sub>
        </h2>
        <h3 className={InvertCard ? captionStyleInv : captionStyleDef}>What&apos;s included:</h3>
        <ul className='space-y-3'>
            <li className='flex flex-row items-center space-x-3'><div className={InvertCard ? listIconStyleInv : listIconStyleDef}><BsFileEarmarkBreak /></div> <span className={InvertCard ? listTextStyleInv : listTextStyleDef}>Email ticketing</span></li>
            <li className='flex flex-row items-center space-x-3'><div className={InvertCard ? listIconStyleInv : listIconStyleDef}><BsFileEarmarkBreak /></div> <span className={InvertCard ? listTextStyleInv : listTextStyleDef}>Customer Management</span></li>
            <li className='flex flex-row items-center space-x-3'><div className={InvertCard ? listIconStyleInv : listIconStyleDef}><BsFileEarmarkBreak /></div> <span className={InvertCard ? listTextStyleInv : listTextStyleDef}>Mobile Apps</span></li>
            <li className='flex flex-row items-center space-x-3'><div className={InvertCard ? listIconStyleInv : listIconStyleDef}><BsFileEarmarkBreak /></div> <span className={InvertCard ? listTextStyleInv : listTextStyleDef}>Email Support</span></li>
        </ul>
        <Link href={URLLink} className={InvertCard ? linkStyleInv : linkStyleDef} data-aos="zoom-out">
            <div>{URLName}</div>
        </Link>
    </div>
  )
}

export default PricingCard