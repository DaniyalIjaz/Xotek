import React from 'react'
// import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './App.css'
import CustomCursor from './components/customCursor/CustomCursor'

const Layout = () => {


  return (
    <>
    <CustomCursor>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </CustomCursor>
      
    </>
  )
}

export default Layout
