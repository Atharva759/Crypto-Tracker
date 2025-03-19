import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinTable from "./components/CoinTable";
import Stock from "./pages/Stock";


function App() {
  return (
    <>
    <Router>
      <div className="bg-blue-900 text-white">
        <Routes>
        <Route path="/" element={<CoinTable />} />
        <Route path="/pages" element={<Stock/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
