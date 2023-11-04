import Link from 'next/link'

const DropDownB = () => {
  return (
    <div className='z-20 flex-col hidden gap-3 px-8 py-3 bg-white rounded-md md:space-x-14 w-fit md:w-[26rem] lg:absolute lg:flex-row group-hover:flex lg:gap-6 justify-between'>
      <div className="flex flex-col gap-2 lg:gap-4 text-black/70">
        <Link href="/about-us" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>About Us</div>
        </Link>
        <Link href="/our-values" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Our Values</div>
        </Link>
        <Link href="/ourteam" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Leadership</div>
        </Link>
        <Link href="/whychooseus" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Why Choose Us</div>
        </Link>
        <Link href="/pricing" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Pricing</div>
        </Link>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 text-black/70">
        <Link href="/career" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Careers</div>
        </Link>
        <Link href="/career/1" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Career Details</div>
        </Link>
        <Link href="/testimonials" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Testimonials</div>
        </Link>
        <Link href="/getaquote" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Get A Quote</div>
        </Link>
        <Link href="/faq" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>FAQ</div>
        </Link>
      </div>
    </div>
  )
}

export default DropDownB
