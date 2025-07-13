import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../../context/CoinContext";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const formatNumber = (num) => {
  if (!num) return "null";
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(2) + "K";
  return num.toString();
};

const Coins = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    } else {
      setDisplayCoin([]);
    }
  }, [allCoin]);

  const topgain = () => {
    const copy = [...displayCoin];
    const sorteddata = copy.sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
    setDisplayCoin(sorteddata);
  };
  const toplose = () => {
    const copy = [...displayCoin];
    const sorteddata = copy.sort(
      (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
    );
    setDisplayCoin(sorteddata);
  };

  const gainers = [...allCoin]
    .sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    )
    .slice(0, 3);
  const losers = [...allCoin]
    .sort(
      (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
    )
    .slice(0, 3);
  const marketcaps = [...allCoin]
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 3);

  return (
    <>
      <Navbar showCurrencySelector={true} />
      <div className="bg-gray-100 mx-6 my-8 grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-md">
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl text-green-700 mb-6">
            Top Gainers
          </h3>
          {gainers.map((item, index) => (
            <Link
              to={`/pages/coin/${item.id}`}
              key={index}
              title="Click to see more info"
              className="flex items-center justify-between p-2 gap-4 mb-5 px-2 text-lg duration-300 ease-out transform hover:bg-green-300 hover:scale-105 hover:rounded-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-600 uppercase">({item.symbol})</span>
              </div>
              <span className="text-green-600 font-medium">
                {item.price_change_percentage_24h.toFixed(2)}%
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl text-red-700 mb-6">Top Losers</h3>
          {losers.map((item, index) => (
            <Link
              to={`/pages/coin/${item.id}`}
              key={index}
              title="Click to see more info"
              className="flex items-center justify-between p-2 gap-4 mb-5 px-2 text-lg duration-300 ease-out transform hover:bg-red-300 hover:scale-105 hover:rounded-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-600 uppercase">({item.symbol})</span>
              </div>
              <span className="text-red-600 font-medium">
                {item.price_change_percentage_24h.toFixed(2)}%
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-2xl text-blue-700 mb-6">
            Top Market Cap
          </h3>
          {marketcaps.map((item, index) => (
            <Link
              to={`/pages/coin/${item.id}`}
              key={index}
              title="Click to see more info"
              className="flex items-center justify-between p-2 gap-4 mb-5 px-2 text-lg duration-300 ease-out transform hover:bg-blue-300 hover:scale-105 hover:rounded-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">{item.name}</span>
                <span className="text-gray-600 uppercase">({item.symbol})</span>
              </div>
              <span className="text-blue-700 font-medium">
                ${formatNumber(item.market_cap)}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-6 my-8  relative mt-[3rem] bg-gray-100 p-10 rounded-md">
        <h2 className="font-semibold text-2xl text-center flex justify-center items-center gap-2 ">
          Top Trending Crypto Currencies{" "}
          <FaArrowTrendUp className="text-green-600" />
        </h2>
        <div className="flex">
          <button
            onClick={() => topgain()}
            className="border m-3 p-2 rounded-full flex items-center cursor-pointer font-medium"
          >
            <IoMdArrowDropupCircle className="text-green-500" size={25} />
            Top Gainers
          </button>
          <button
            onClick={() => toplose()}
            className="border m-3 p-2 rounded-full flex items-center cursor-pointer font-medium"
          >
            <IoMdArrowDropdownCircle className="text-red-500 " size={25} /> Top
            Losers
          </button>
        </div>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-4 items-center border-b border-gray-700 font-semibold">
          <p className="text-center">Rank</p>
          <p>Coin</p>
          <p className="text-center">Symbol</p>
          <p className="text-center">Current Price</p>
          <p className="text-center">Price Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        <div className="shadow-2xl rounded-lg">
          {displayCoin.slice(0, 10).map((item, index) => (
            <Link
              to={`/pages/coin/${item.id}`}
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1.5fr] p-4 items-center  last:border-none duration-300 ease-out transform hover:scale-105 hover:bg-gray-300 hover:rounded-lg hover:border-none"
              title="Click to see more info"
            >
              <p className="text-center">{item.market_cap_rank}</p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <p>{item.name}</p>
              </div>

              <p className="text-center">{item.symbol}</p>

              <p className="text-center">
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>

              <p
                className={`text-center ${
                  item.price_change_percentage_24h > 0
                    ? "text-[#00d515]"
                    : "text-[#ff4646]"
                } flex gap-3 justify-center items-center`}
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100} %
                {item.price_change_percentage_24h > 0 ? (
                  <IoMdArrowDropupCircle className="text-green-600" />
                ) : (
                  <IoMdArrowDropdownCircle className="text-red-600" />
                )}
              </p>

              <p className="text-right">
                {currency.symbol}
                {formatNumber(item.market_cap)}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={`/pages/allcoins`}
          className="p-2 text-blue-500 font-bold flex justify-center items-center gap-2"
        >
          See All
          <FaArrowRight size={15} />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Coins;
