import React from 'react'
import CartCard from './CartCard'

const CartCardsGrid = ({DBArray}) => {
  return (
    <>
    <div className='md:grid grid-cols-3 space-y-12 md:space-y-12 md:space-x-10 pt-16 md:pt-[100px] px-4 md:px-[170px] mb-20'>
        {
          DBArray.map((inobj, key) => (
            <CartCard 
              CartKey={key}
              CartImg={inobj.image}
              ShopLink={inobj.url}
              CategoryLink={inobj.tag}
              CartTag={inobj.tag}
              CartTitle={inobj.name}
              CartPrice={inobj.price}
            />    
          ))
        }
    </div>
    </>
  )
}

export default CartCardsGrid