import React from 'react'
import { Link } from 'react-router-dom'
import hero_2 from "../assets/hero_2.png"


const HeroSection = () => {
  return (
    <div>
      <section 
  className="relative bg-gray-900 text-white flex items-center justify-center px-6 md:px-16 py-10 pb-14"
  >
  
  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
    
    
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Track Crypto. Analyze Trends. Stay Ahead.
      </h1>
      <p className="text-lg mb-6">
        Real-time crypto tracking, price analytics, ETF data, and the latest global news — all in one dashboard.
      </p>
      <Link
        to="/pages/Coins"
        className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
      >
        Explore Dashboard
      </Link>
    </div>

    
    <div className="grid grid-cols-1 gap-6">
      
      
      <img src={hero_2} alt="" />

    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection
