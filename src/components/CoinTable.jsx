import React, { useContext,useState,useEffect } from 'react'
import bg from '../assets/bg.jpg'
import Navbar from './Navbar'
import { CoinContext } from '../context/CoinContext'
const CoinTable = () => {

    const {allCoin,currency} = useContext(CoinContext);
    const [displayCoin,setDsiplayCoin] = useState([]);
    const [input,setInput] = useState('')
    const inputHandler = (event) =>{
        setInput(event.target.value);
        if(event.target.value===""){
            setDsiplayCoin(allCoin);
        }
    }
    const searchHandler = async (event) =>{
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLocaleString().includes(input.toLocaleLowerCase());
        })
        setDsiplayCoin(coins)
    }
    useEffect(() => {
        setDsiplayCoin(allCoin)
    }, [allCoin])

  return (
    <div>
      <div className='pb-[3rem]'>
        <div className='relative h-[110vh] w-full bg-cover bg-center bg-no-repeat rounded-b-[150px]' style={{backgroundImage:`url(${bg})`}}>
            <Navbar/>
            <div className='max-w-[900px] ml-[-50px]  mt-[8rem] flex flex-col items-center text-left gap-8'>
                <h1 className='text-[60px] ml-[-85px] font-bold leading-tight relative left-[-40px]'>Smart & Efficient <br/> Crypto Tracker</h1>
                <p className='w-[75%] text-[#e3e3e3] text-[18px] leading-[1.5]'>Stay updated with your digital assets with our powerful platform.Get real-time updates to track your portfolio.</p>
                <form onSubmit={searchHandler} className='relative z-10 flex items-center w-[60%] bg-white rounded-full p-2 text-[20px] ml-[-130px] gap-3 '>
                    <input value={input} onChange={inputHandler} type="text" placeholder='Search Crypto' className='flex text-[16px] outline-none border-none pl-2 text-black pr-[200px]' />
                    <button type="submit" className='bg-[#4727ff] text-white text-[16px] px-6 py-2 rounded-full cursor-pointer'>Search</button>
                </form>
            </div>
        </div>
        <div className='max-w-[1000px] mx-auto relative mt-[3rem]'>
    <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-4 items-center border-b border-gray-700 font-semibold'>
        <p className='text-center'>Rank</p>
        <p>Coin</p>
        <p className='text-center'>Symbol</p>
        <p className='text-center'>Current Price</p>
        <p className='text-center'>Price Change</p>
        <p className='text-right'>Market Cap</p>
    </div>
            {displayCoin.slice(0,12).map((item, index) => (
    <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-4 items-center border-b last:border-none'>
        <p className='text-center'>{item.market_cap_rank}</p>

        <div className='flex items-center gap-3'>
            <img src={item.image} alt={item.name} className='w-8 h-8 object-contain' />
            <p>{item.name}</p>
        </div>

        <p className='text-center'>{item.symbol}</p>

        <p className='text-center'>
            {currency.symbol} {item.current_price.toLocaleString()}
        </p>

        <p className={`text-center ${item.price_change_percentage_24h > 0 ? 'text-[#00d515]' : 'text-[#ff4646]'}`}>
            {Math.floor(item.price_change_percentage_24h * 100) / 100} %
        </p>

        <p className='text-right'>
            {currency.symbol}{item.market_cap}
        </p>
    </div>
))}

        </div>

      </div>
    </div>
  )
}

export default CoinTable;
