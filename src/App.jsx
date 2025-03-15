import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoinTable from "./components/CoinTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>

          <div className="bg-blue-900 text-white">
            <CoinTable />
            <Footer />
          </div>
    </>
  );
}

export default App;
