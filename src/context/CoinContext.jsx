import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const apikey = import.meta.env.VITE_api_key; 

    const fetchAllCoin = async () => {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets`,
                {
                    params: {
                        vs_currency: currency.name
                    },
                    headers: {
                        accept: "application/json",
                        "x-cg-demo-api-key": apikey
                    }
                }
            );
            setAllCoin(response.data);
        } catch (error) {
            alert("Error Fetching Coin Data.. Try Again.");
        }
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    return (
        <CoinContext.Provider value={{ allCoin, currency, setCurrency }}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
