import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Coins from "./pages/Coins/Coins";
import News from "./pages/news/News";
import Etf from "./pages/etf/Etf";
import Coin from "./pages/coin/Coin";
import CoinContextProvider from "./context/CoinContext";
import HeroSection from "./components/HeroSection";
import Allcoins from "./pages/allcoins/allcoins";

function App() {
  return (
    <>
      <Router>
        <CoinContextProvider>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/pages/Coins" element={<Coins />} />
            <Route path="/pages/etf" element={<Etf />} />
            <Route path="/pages/news" element={<News />} />
            <Route path="/pages/coin/:id" element={<Coin />} />
            <Route path="/pages/allcoins" element={<Allcoins />} />
          </Routes>
        </CoinContextProvider>
      </Router>
    </>
  );
}

export default App;
