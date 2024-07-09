import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-100'>
        <main className=''>
            <Header />
            <Outlet />
            <Footer/>
        </main>
        {/* <CartTab /> */}
    </div>
  )
}

export default Layout