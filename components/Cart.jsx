import {AiOutlineClose} from 'react-icons/ai'

const Cart = ({cart, setCart}) => {

  const handleCart = () => {
    setCart(false)
  }

  return (
    <>
    {cart && (
        <div className='bg-black/80 w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-center'>
        <div className='flex flex-col justify-start items-center w-full h-screen sm:h-[18rem] sm:w-[22rem] bg-white py-5'>
         <div className='flex justify-between items-center px-6 w-full text-black/90 border-b pb-4 border-gray-300'>
          <h1 className='text-2xl text-[#0c011a] font-bold'>Your Cart</h1>
          <div onClick={handleCart} >
           <AiOutlineClose  size={22} className='cursor-pointer'/>
          </div>
         </div>
         <hr className='border border-white/10 '/>
        <p className='text-black/30 font-semibold mt-[30%] sm:mt-8 text-center'>No items found</p>
      </div>
      </div>
    )}</>
    
  )
}

export default Cart
