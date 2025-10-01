import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import OfferBanner from '../Components/OfferBanner'
import ProductCard from '../Components/ProductCard'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

function Index() {
  return (
    <div>
        <Header />
        <Hero />
        <OfferBanner />
        <ProductCard />
        <Services />
        < Footer/>
    </div>
  )
}

export default Index