import Link from 'next/link'

const DropDownC = () => {
  return (
    <div className='bg-white h-[230px] lg:h-fit overflow-y-scroll lg:absolute w-full hidden flex-col lg:flex-row group-hover:flex py-3 px-8 rounded-md gap-6 z-20'>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/" className='hover:text-violet-900'>Home 1</Link>
        <Link href="" className='hover:text-violet-900'>Home 2</Link>
        <Link href="" className='hover:text-violet-900'>Home 3</Link>
        <Link href="/home4" className='hover:text-violet-900'>Home 4</Link>
        <Link href="" className='hover:text-violet-900'>About Us</Link>
        <Link href="/ourteam" className='hover:text-violet-900'>Leadership</Link>
        <Link href="" className='hover:text-violet-900'>Testimonials</Link>
        <Link href="" className='hover:text-violet-900'>Why Choose Us</Link>
        <Link href="" className='hover:text-violet-900'>Our Values</Link>
      </div>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/career" className='hover:text-violet-900'>Careers</Link>
        <Link href="career/1" className='hover:text-violet-900'>Career Details</Link>
        <Link href="" className='hover:text-violet-900'>Blog</Link>
        <Link href="" className='hover:text-violet-900'>Blog Details</Link>
        <Link href="" className='hover:text-violet-900'>Case Studies</Link>
        <Link href="" className='hover:text-violet-900'>Case Study Details</Link>
        <Link href="" className='hover:text-violet-900'>Services </Link>
        <Link href="" className='hover:text-violet-900'>Services Details</Link>
      </div>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/shop" className='hover:text-violet-900'>Shop</Link>
        <Link href="" className='hover:text-violet-900'>Shop Details</Link>
        <Link href="" className='hover:text-violet-900'>Get A Quote</Link>
        <Link href="/testimonials" className='hover:text-violet-900'>Testimonials</Link>
        <Link href="" className='hover:text-violet-900'>Pricing</Link>
        <Link href="/faq" className='hover:text-violet-900'>FAQ</Link>
      </div>
    </div>
  )
}

export default DropDownC
