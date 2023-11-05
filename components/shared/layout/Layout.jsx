import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from "next/router";


const Layout = ({children}) => {
  const router = useRouter()
  return (
    <div>
        {children}
        {router.pathname !== "/_error" && <Footer />}
    </div>
  )
}

export default Layout