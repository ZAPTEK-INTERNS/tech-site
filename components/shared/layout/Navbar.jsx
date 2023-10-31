import logo from '../../../public/images/logo-black.svg'
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import {BsCartFill} from 'react-icons/bs'
import {CgMenuRight} from 'react-icons/cg'
import {FiArrowDownRight} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {DropDownA, DropDownB, DropDownC, Cart} from '../../links'



const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)

  const handleCartOpen = () => {
    setCart(true)
  }
  const handleMenu = () => {
    setMenu(prev => !prev)
  }
  const handleClose = () => {
    setMenu(false)
  }

  return (
    <nav className='w-full overflow-hidden py-4 lg:py-0'>
      <section className='flex justify-between items-center w-[94%] lg:w-[96%] mx-[3%] lg:ml-[4%]'>
        <Image src={logo} />

        <div className='hidden lg:flex text-lg gap-12 font-semibold'> 
          <div className='group'>
            <p className='cursor-pointer relative hover:text-violet-900 transition-all'>
             <span className='absolute text-gray-500 bottom-3 left-[-15px] text-xs'>01</span>
              Demos </p>
             <div>
              <DropDownA/>
            </div>
          </div>

          <div className='group'>
            <p className='cursor-pointer relative hover:text-violet-900 transition-all'>
             <span className='absolute text-gray-500 bottom-3 left-[-15px] text-xs'>01</span>
              Company </p>
             <div>
              <DropDownB/>
            </div>
          </div>

          <Link href="" className='relative hover:text-violet-900 transition-all'>
           <span className='absolute text-gray-500 bottom-3 left-[-15px] text-xs'>03</span>
            Services
          </Link>
          <Link href="" className='relative hover:text-violet-900 transition-all'>
           <span className='absolute text-gray-500 bottom-3 left-[-15px] text-xs'>04</span>
            Case Studies
          </Link>
          <div className="group">
           <p className='cursor-pointer relative hover:text-violet-900 transition-all'>
             <span className='absolute text-gray-500 bottom-3 left-[-15px] text-xs'>01</span>
              All Pages</p>
             <div>
              <DropDownC/>
             </div>
          </div>
        </div>

        <div className='flex gap-8 items-center'>
          <div className='relative cursor-pointer'>
            <BsCartFill className='hover:text-violet-700 transition-all' onClick={handleCartOpen}/>
            <span className='absolute px-1 rounded-full text-white bg-black bottom-3 left-[15px] text-xs'>0</span>
          </div>
           <div>
             <Cart cart={cart} setCart={setCart}/>
           </div>
          <div className='hidden lg:flex cursor-pointer gap-4 items-center py-7 px-3 group bg-violet-700 hover:bg-white transition-all text-white hover:text-black z-30'>
            <p className='font-semibold text-lg h-full'>Get in Touch</p>
            <FiArrowDownRight size={28} className='transition-all group-hover:-rotate-45'/>
          </div>
          <div onClick={handleMenu} className="block lg:hidden">
           <CgMenuRight size={35}/>
          </div>
        </div>   
     </section>

     {menu && (
     <div className="fixed lg:hidden left-0 top-0 bg-white h-[100vh] w-[60%] sm:w-[300px] z-40">
       <div className="flex justify-between items-center my-6 mx-4">
         <Image src={logo} className="w-[70px] sm:w-[100px]"/>
         <AiOutlineClose size={24} onClick={handleClose}/>
       </div>
       <div className='flex flex-col text-lg gap-6 mx-4 font-semibold'> 
          <div className='group '>
            <p className='cursor-pointer flex justify-between items-center relative hover:text-violet-900 transition-all'>
              <span>Demos</span>
              <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180"/>
            </p>
             <div>
               <DropDownA/>
            </div>
          </div>
          <div className='group'>
            <p className='cursor-pointer relative flex justify-between items-center hover:text-violet-900 transition-all'>
               <span>Company</span> 
              <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180"/>
            </p>
             <div>
              <DropDownB/>
            </div>
          </div>
          <Link href="" className='relative hover:text-violet-900 transition-all'>Services</Link>
          <Link href="" className='relative hover:text-violet-900 transition-all'>Case Studies</Link>
          <div className="group">
           <p className='cursor-pointer relative flex justify-between items-center hover:text-violet-900 transition-all'>
             <span> All Pages</span>
             <MdKeyboardArrowDown className="transition-all group-hover:-rotate-180"/>
            </p>
             <div>
              <DropDownC/>
            </div>
          </div>
          <div className='flex  cursor-pointer gap-4 items-center py-5 px-3 group bg-violet-700 hover:bg-white transition-all text-white hover:text-black z-30'>
            <p className='font-semibold text-lg h-full'>Get in Touch</p>
            <FiArrowDownRight size={35} className='transition-all group-hover:-rotate-45'/>
          </div>
        </div>
      </div>
      )}
      
    </nav>
  )
}

export default Navbar