import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoinContext } from '../context/CoinContext';

const Navbar = () => {
  const { currency, setCurrency } = useContext(CoinContext);
  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    switch(selected){
      case 'usd':
        setCurrency({name:'usd',symbol:'$'})
        break;
      case 'inr':
        setCurrency({name:'inr',symbol:'₹'})
        break;
      case 'eur':
        setCurrency({name:'eur',symbol:'€'})    
        break;
      default:
        break;  
    }
  };

  return (
    <div>
      <nav className='flex items-center justify-between py-5 px-[10%] text-gray-300 relative z-[1000] '>
        <Link to="/">
        <h2 className='text-2xl font-bold'>Cypto Price</h2>
        </Link>
        <ul className='flex gap-10 list-none font-medium'>
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
          <span className='font-normal m-2'>Choose Currency</span>
            <select value={currency.name} onChange={handleCurrencyChange} className=' p-2 w-20 border rounded-lg bg-gray-300 text-black mt-1 cursor-pointer'>
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
            </select>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
