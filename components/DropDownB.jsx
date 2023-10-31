import Link from 'next/link'

const DropDownB = () => {
  return (
    <div className='bg-white w-fit dropdown absolute hidden group-hover:flex py-3 px-8 rounded-md gap-6 z-20'>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/" className='hover:text-violet-900'>About Us</Link>
        <Link href="/home3" className='hover:text-violet-900'>Our Values</Link>
        <Link href="/home2" className='hover:text-violet-900'>Leadership</Link>
        <Link href="/home4" className='hover:text-violet-900'>Why Choose Us</Link>
        <Link href="/home2" className='hover:text-violet-900'>Pricing</Link>
      </div>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="" className='hover:text-violet-900'>Careers</Link>
        <Link href="" className='hover:text-violet-900'>Career Details</Link>
        <Link href="" className='hover:text-violet-900'>Testimonials</Link>
        <Link href="" className='hover:text-violet-900'>Get A Quote</Link>
        <Link href="" className='hover:text-violet-900'>FAQ</Link>
      </div>
    </div>
  )
}

export default DropDownB
