import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinTable from "./components/CoinTable";
import Coins from "./pages/Coins/Coins";
import News from "./pages/news/News";
import Etf from "./pages/etf/Etf";
import Coin from "./pages/coin/Coin";
import CoinContextProvider from "./context/CoinContext"


function App() {
  return (
    <>
    <Router>
      <CoinContextProvider>
        <Routes>
            <Route path="/" element={<CoinTable />} />
            <Route path="/pages/Coins" element={<Coins/>} />
            <Route path="/pages/etf" element={<Etf/>} />
            <Route path="/pages/news" element={<News/>} />
            <Route path="/pages/coin/:id" element={<Coin />} />
          </Routes>
      </CoinContextProvider>
    </Router>
    </>
  );
}

export default App;
