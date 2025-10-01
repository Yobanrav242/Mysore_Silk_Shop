import React from 'react'
import "../styles/Hero.css"
import heroImage from "../assets/hero-silk.jpg"
import { Gift, ShoppingBag, Sparkles } from "lucide-react";

function Hero() {
  const year = new Date().getFullYear();
  return (
    <section id="home" className='py-3 px-md-4 px-2 section'>
     {/* container */}
     <div className='container-fluid px-4 py-4 py-md-5'> 
     <div className='row align-items-center g-5'>
      {/* left content */}
      <div className='col-md-6 '>
        {/* sparkles */}
        <div className='mb-2'>
           <div className="d-inline-flex align-items-center gap-2 background-color  rounded-pill px-3 py-2">
            <Sparkles size={18} className='text-warning' />
            <span className="fw-semibold">New Collection {year}</span>
          </div>
        </div>
        {/* title */}
        <h2 className="display-4 fw-bold lh-tight ">
          Exquisite <span className="primary">Mysore Silk</span> Collections
        </h2>
        {/* decription */}
        <p className="desc-size primary-muted py-2">
          Discover the finest handwoven silk sarees crafted with traditional artistry and modern elegance. 
          Each piece tells a story of heritage and luxury.
        </p>

        {/* specil offer card */}
         <div className="special-border px-3 py-4 rounded mb-4">
          <div className="d-flex align-items-center gap-2 mb-1">
           <Gift size={18} className='special'/>
            <span className="fw-bold special">Special Offer!</span>
          </div>
          <p className="mb-0 ">Get up to 30% off on all premium silk sarees. Limited time only!</p>
        </div>

        {/* buttons */}
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
          <button 
            className=" fs-6 my-btn px-3 py-2 shadow my-btn-clr"
            onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ShoppingBag size={18} className='me-2 ' />
            Shop Now
          </button>
          <button 
            className="fs-6 my-btn px-3 py-2 primary "
            onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Offers
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-md-6 position-relative">
        <div className="rounded overflow-hidden shadow">
          <img 
            src={heroImage} 
            alt="Mysore Silk Collection" 
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
        </div>

        {/* Floating Info Box */}
         {/* Floating Info Box */}
        <div className="position-absolute bottom-0 translate-y-30 start-0 bg-warning text-dark p-4 rounded shadow d-none d-md-block">
          <p className="fs-2 fw-bold mb-0">500+</p>
          <p className="small mb-0">Happy Customers</p>
        </div>

      </div>

     </div>
     </div>
    </section>
  )
}

export default Hero