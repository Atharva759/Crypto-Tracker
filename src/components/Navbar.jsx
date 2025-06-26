import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between py-5 px-[10%] text-gray-300 relative z-[1000] '>
        <h2 className='text-2xl font-bold'>Cypto Price</h2>
        <ul className='flex gap-10 list-none'>
        <li className='cursor-pointer hover:text-white transition'>
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer hover:text-white transition'>
            <Link to="/pages/Stock">Stocks</Link>
          </li>
          <li className='cursor-pointer hover:text-white transition'>
            <Link to="/pages/etf">ETF</Link>
          </li>
          <li className='cursor-pointer hover:text-white transition'>
            <Link to="/pages/news">News</Link>
          </li>
        </ul>
        <div>
          
          <button className='items-center px-6 py-2 font-medium text-gray-900 bg-white rounded-full cursor-pointer '>Sign Up</button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
