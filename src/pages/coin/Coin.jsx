import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import Loader from "../../components/Loader";
import LineChart from "../../components/LineChart";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formatNumber } from "../Coins/Coins";

const Coin = () => {
  const apikey = import.meta.env.VITE_api_key;
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const { currency } = useContext(CoinContext);
  const [historicalData, setHistoricalData] = useState(null);
  const [days, setDays] = useState(10);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apikey,
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`,
        options
      );
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apikey,
      },
    };

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=${days}`,
        options
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  if (!historicalData || !coinData) return <Loader />;

  return (
    <>
      <Navbar showCurrencySelector={true} />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className=" bg-white shadow-2xl rounded-2xl w-full max-w-6xl p-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
              <img
                src={coinData.image.large}
                alt={coinData.name}
                className="w-28 h-28 object-contain"
              />
              <h2 className="text-4xl font-bold mt-4">{coinData.name}</h2>
              <p className="text-gray-600 uppercase tracking-wide text-base">
                {coinData.symbol}
              </p>
              <div className="mt-6 text-xl font-semibold text-green-600">
                Current Price: {currency.symbol}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                {coinData.description.en.split(". ")[0]}.
              </p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 w-full">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Market Cap</p>
                  <p className="text-lg font-bold text-gray-800">
                    {currency.symbol}
                    {formatNumber(
                      coinData.market_data.market_cap[currency.name]
                    )}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">24h Volume</p>
                  <p className="text-lg font-bold text-gray-800">
                    {currency.symbol}
                    {formatNumber(
                      coinData.market_data.total_volume[currency.name]
                    )}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Market Cap Rank</p>
                  <p className="text-lg font-bold text-gray-800">
                    #{coinData.market_cap_rank}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">24h Price Change</p>
                  <p
                    className={`text-lg font-bold ${
                      coinData.market_data.price_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coinData.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Total Supply</p>
                  <p className="text-lg font-bold text-gray-800">
                    {formatNumber(coinData.market_data.total_supply)}
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="font-medium">Circulating Supply</p>
                  <p className="text-lg font-bold text-gray-800">
                    {formatNumber(coinData.market_data.circulating_supply)}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 rounded-xl p-6 shadow-inner h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {`Last ${days} Days Price Trend`}
                  </h3>

                  <div className="flex items-center space-x-2">
                    <label htmlFor="days" className="text-sm text-gray-600">
                      View:
                    </label>
                    <select
                      id="days"
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={10}>10 Days</option>
                      <option value={30}>30 Days</option>
                      <option value={90}>3 Months</option>
                      <option value={180}>6 Months</option>
                      <option value={365}>1 Year</option>
                    </select>
                  </div>
                </div>

                <div className="h-[400px]">
                  <LineChart historicalData={historicalData} />
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`/pages/allcoins`}
            className="m-[50%] p-2 bg-black text-white rounded-md"
          >
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coin;
