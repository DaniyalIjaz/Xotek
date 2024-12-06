import React from 'react'
// import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './App.css'
import CustomCursor from './components/customCursor/CustomCursor'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Navbar from './components/navbar'

const Layout = () => (
  <>
    <CustomCursor>
      <ScrollToTop />
      <Navbar/>
      <Outlet />
      <Footer />
    </CustomCursor>

  </>
)

export default Layout
