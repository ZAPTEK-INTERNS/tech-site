import Link from 'next/link'

const DropDownC = () => {
  return (
    <div className='bg-white h-[230px] lg:h-fit lg:absolute lg:right-[100px] xl:right-[200px] w-fit hidden flex-col lg:flex-row group-hover:flex py-3 px-8 rounded-md gap-6 z-20'>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Home 1</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Home 2</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Home 3</div>
        </Link>
        <Link href="/home4" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Home 4</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>About Us</div>
        </Link>
        <Link href="/ourteam" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Leadership</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Testimonials</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Why Choose Us</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Our Values</div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/career" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Careers</div>
        </Link>
        <Link href="career/1" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Career Details</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Blog</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Blog Details</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Case Studies</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Case Study Details</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Services </div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Services Details</div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-black/70">
        <Link href="/shop" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Shop</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Shop Details</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Get A Quote</div>
        </Link>
        <Link href="/testimonials" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Testimonials</div>
        </Link>
        <Link href="" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>Pricing</div>
        </Link>
        <Link href="/faq" className='menu-link'>
          <div className="menu-link-bar"></div>
          <div>FAQ</div>
        </Link>
      </div>
    </div>
  )
}

export default DropDownC
