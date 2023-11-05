import React from 'react'
import { PageBanner } from '../../components/testimonials'
import { ShopDB } from '../../components/shop/ShopDB'
import Head from 'next/head'
import CartCardsGrid from '../../components/shop/CartCardsGrid'
import { Navbar } from '../../components/links'

const shop = () => {
  
  return (
    <div>

      <Head> <title>Shop - Tech</title> </Head>

      <Navbar />

      <PageBanner 
          Title='Shop' 
          Text='At Tech, we are committed to offering clear and competitive pricing to guarantee that our customers receive the best value'
      />

      <CartCardsGrid DBArray={ShopDB} />
          
    </div>
  )
}

export default shop