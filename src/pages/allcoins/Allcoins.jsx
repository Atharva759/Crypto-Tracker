import { CoinContext } from "../../context/CoinContext";
import { useContext } from "react";
import { formatNumber } from "../Coins/Coins";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

const Allcoins = () => {
  const { allCoin, currency } = useContext(CoinContext);

  if (!allCoin) return <Loader />;
  return (
    <div>
      <Navbar showCurrencySelector={true} />
      <div className="bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allCoin.map((item, index) => (
          <Link
            title="Click to see detailed info"
            to={`/pages/coin/${item.id}`}
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition duration-300"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500 uppercase">{item.symbol}</p>
              <p className="text-sm text-gray-500">
                Current Price : {currency.symbol}{" "}
                {formatNumber(item.current_price)}
              </p>
              <p className="text-sm text-gray-700">
                Market Cap: ${formatNumber(item.market_cap)}
              </p>
            </div>
            <div className="ml-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Allcoins;
