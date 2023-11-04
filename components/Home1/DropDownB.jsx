import Link from 'next/link'

const DropDownB = () => {
  return (
    <div className='z-20 flex-col hidden gap-3 px-8 py-3 bg-white rounded-md w-fit lg:absolute lg:flex-row group-hover:flex lg:gap-6'>
      <div className="flex flex-col gap-2 lg:gap-4 text-black/70">
        <Link href="/" className='hover:text-violet-900'>About Us</Link>
        <Link href="/home3" className='hover:text-violet-900'>Our Values</Link>
        <Link href="/ourteam" className='hover:text-violet-900'>Leadership</Link>
        <Link href="/home4" className='hover:text-violet-900'>Why Choose Us</Link>
        <Link href="/home2" className='hover:text-violet-900'>Pricing</Link>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 text-black/70">
        <Link href="/career" className='hover:text-violet-900'>Careers</Link>
        <Link href="career/1" className='hover:text-violet-900'>Career Details</Link>
        <Link href="/testimonials" className='hover:text-violet-900'>Testimonials</Link>
        <Link href="/getaquote" className='hover:text-violet-900'>Get A Quote</Link>
        <Link href="/faq" className='hover:text-violet-900'>FAQ</Link>
      </div>
    </div>
  )
}

export default DropDownB
