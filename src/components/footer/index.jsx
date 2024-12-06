import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='footerMain'>
      {/* Upper Footer  */}
        <footer className="footer">
      <div className="footer-about">
        <div className="footer-logo">
          <img src="./Images/logo/xotek-logo.avif" alt="Xotek logo" className="logo-image" />
          {/* <h2>Orizon</h2> */}
        </div>
        <p className="footer-description">
          We design world-class digital products and help startups & Fortune 500 companies delight humans on the other side of the screen.
        </p>
        <div className="footer-buttons">
          <button className="contact-btn">Contact Us</button>
          <button className="refer-btn">Refer Us</button>
        </div>
        <p className="footer-diverse-supplier">Diverse Supplier</p>
        <p className="footer-supplier-info">CAMSC Canadian Supplier Council</p>
      </div>

      <div className="footer-section footer-links">
        <h3>Company</h3>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Our Work</li>
          <li>Why Orizon</li>
          <li>Design Subscription</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="footer-section footer-services">
        <h3>Services</h3>
        <ul>
          <li>Design System & UI Kit</li>
          <li>Web 3.0 Design & NFTs</li>
          <li>Presentation Design/Pitch Deck</li>
          <li>Apple Vision Pro UX</li>
          <li>Figma Design Experts</li>
          <li>Motion & Video Production</li>
          <li>E-commerce Design Agency</li>
        </ul>
      </div>

      <div className="footer-section footer-other-services">
        <ul>
          {/* <li>Spatial Computing & XR Design</li> */}
          <li>UX Design</li>
          <li>Mobile App Design</li>
          <li>Landing Page Design</li>
          <li>Branding & Identity</li>
          <li>Webflow Agency</li>
          <li>3D Art & 3D Motion</li>
          {/* <li>UX Design for AI-enabled products</li> */}
          <li>Marketing</li>
          <li>Design Your Brand</li>
        </ul>
      </div>
    </footer>

      {/* Lower Footer  */}
        <div className="lowerFooter">
          <div className="footerLowerPara">
            <p>© 2025 Xotek. All Rights Reserved.</p>
            <p>Privacy Policy</p>
            <p>Cookie Preferences</p>
            <p>Terms</p>
          </div>

          <div className="footerLowerSocial">

          </div>
        </div>
      
    </div>
  )
}

export default Footer
