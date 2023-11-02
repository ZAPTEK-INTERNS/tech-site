import Link from 'next/link'

const DropDownB = () => {
  return (
    <div className='absolute z-20 hidden gap-6 px-8 py-3 bg-white rounded-md w-fit dropdown group-hover:flex'>
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
        <Link href="/testimonials" className='hover:text-violet-900'>Testimonials</Link>
        <Link href="" className='hover:text-violet-900'>Get A Quote</Link>
        <Link href="" className='hover:text-violet-900'>FAQ</Link>
      </div>
    </div>
  )
}

export default DropDownB
