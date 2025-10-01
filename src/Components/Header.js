import React, { useState } from 'react';
import "../styles/Header.css";
import { HashLink } from 'react-router-hash-link';
import { Phone, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='sticky-top background shadow'>
      <div className='container-fluid mx-auto py-4 px-3'>
        {/* header */}
        <div className='d-flex align-items-center justify-content-md-between justify-content-between'>
          
          {/* left logo + shop name */}
          <div className='d-flex flex2 align-items-center gap-2 '>
            <div className='d-flex align-items-center' style={{ width: "48px", height: "48px" }}>
              <span className='fs-4 text-white'>SMS</span>
            </div>
            <div>
              <h1 className="h2 fw-bold text-white mb-0">Sri Mysore Silk</h1>
              <p className="small mb-0 text-white opacity-75">Premium Silk Collections</p>
            </div>
          </div>

          {/* navigation for medium+ screens */}
        <nav className="d-none d-md-flex flex2 align-items-center justify-content-between">
  <HashLink smooth to="#home" className="navLink fw-medium text-decoration-none">Home</HashLink>
  <HashLink smooth to="#collections" className="navLink fw-medium text-decoration-none">Collections</HashLink>
  <HashLink smooth to="#offers" className="navLink fw-medium text-decoration-none">Offers</HashLink>
  <HashLink smooth to="#services" className="navLink fw-medium text-decoration-none">Services</HashLink>
  <HashLink smooth to="#contact" className="navLink fw-medium text-decoration-none">Contact</HashLink>
</nav>


          {/* contact for large screens */}
          <div className="d-none d-lg-flex flex1 justify-content-end align-items-center">
            <a href="tel:+918220895877" className="d-md-flex align-items-center text-decoration-none gap-2 navLink">
              <Phone size={18} />
              <span className="d-none d-lg-inline text-sm">+91 82208 95877</span>
            </a>
          </div>

          {/* hamburger menu for small screens */}
          <div className="d-md-none ms-auto">
            <button onClick={toggleMenu} className="btn " >
              {menuOpen ? <X className="hamburger-btn" size={24} /> : <Menu className="hamburger-btn" size={24} />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
  <div className="d-md-none mt-3 d-flex justify-content-between rounded shadow-sm p-1">
    <HashLink smooth to="#home" className="navLink fw-medium text-decoration-none mb-2" onClick={() => setMenuOpen(false)}>Home</HashLink>
    <HashLink smooth to="#collections" className="navLink fw-medium text-decoration-none mb-2" onClick={() => setMenuOpen(false)}>Collections</HashLink>
    <HashLink smooth to="#offers" className="navLink fw-medium text-decoration-none mb-2" onClick={() => setMenuOpen(false)}>Offers</HashLink>
    <HashLink smooth to="#services" className="navLink fw-medium text-decoration-none mb-2" onClick={() => setMenuOpen(false)}>Services</HashLink>
    <HashLink smooth to="#contact" className="navLink fw-medium text-decoration-none" onClick={() => setMenuOpen(false)}>Contact</HashLink>
  </div>
)}


      </div>
    </header>
  )
}

export default Header;
