import React from 'react'
import { PageBanner } from '../components/testimonials'
import { ShopDB } from '../components/shop/ShopDB'
import Head from 'next/head'
import CartCardsGrid from '../components/shop/CartCardsGrid'

const shop = () => {
  const innerObjects = [ShopDB.item0,ShopDB.item1,ShopDB.item2,ShopDB.item3,ShopDB.item4,ShopDB.item5,ShopDB.item6,ShopDB.item7,ShopDB.item8];
  
  return (
    <div>

      <Head> <title>Shop - Tech</title> </Head>

      <PageBanner 
          Title='Shop' 
          Text='At Tech, we are committed to offering clear and competitive pricing to guarantee that our customers receive the best value'
      />

      <CartCardsGrid DBArray={innerObjects} />
          
    </div>
  )
}

export default shop