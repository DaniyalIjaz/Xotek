import React from 'react'
// import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './App.css'
import CustomCursor from './components/customCursor/CustomCursor'

const Layout = () => {

  // useEffect(() => {
  //   const scrollSpeed = 4; // Adjust this value for slower/faster scrolling

  //   const handleScroll = (event) => {
  //     event.preventDefault();
  //     const delta = event.deltaY * scrollSpeed;
  //     window.scrollBy({
  //       top: delta,
  //       behavior: 'smooth',
  //     });
  //   };

  //   window.addEventListener('wheel', handleScroll, { passive: false });

  //   // Cleanup on unmount
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

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
