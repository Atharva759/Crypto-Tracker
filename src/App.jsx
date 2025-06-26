import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinTable from "./components/CoinTable";
import Stock from "./pages/Stock/Stock";
import News from "./pages/news/News";
import Etf from "./pages/etf/Etf";
import Coin from "./pages/coin/Coin";


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<CoinTable />} />
        <Route path="/pages/Stock" element={<Stock/>} />
        <Route path="/pages/etf" element={<Etf/>} />
        <Route path="/pages/news" element={<News/>} />
        <Route path="/pages/coin/:id" element={<Coin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
