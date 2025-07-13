import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import navlogo from "../assets/navlogo.png";

const Navbar = ({ showCurrencySelector }) => {
  const { currency, setCurrency } = useContext(CoinContext);
  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    switch (selected) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <nav className="flex items-center justify-between py-5 px-[5%] bg-black text-white relative z-[1000] ">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={navlogo}
              alt=""
              className="w-15 h-15 mr-2 object-contain"
            />
            <h2 className="text-2xl font-bold">Crypto Tracker</h2>
          </Link>
        </div>
        <ul className="flex gap-10 list-none font-medium mx-auto">
          <li className="cursor-pointer hover:text-gray-300 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200">
            <Link to="/pages/allcoins">Coins</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200">
            <Link to="/pages/etf">ETF</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition duration-200">
            <Link to="/pages/news">News</Link>
          </li>
        </ul>
        {showCurrencySelector && (
          <div className="flex items-center text-sm gap-1">
            <span className="mr-1">Currency</span>
            <select
              value={currency.name}
              onChange={handleCurrencyChange}
              className="px-2 py-1 w-17 border-2 border-gray-400 rounded-lg bg-black text-white text-sm cursor-pointer hover:bg-gray-600 h-7"
            >
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
            </select>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
