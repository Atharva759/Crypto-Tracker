import React from 'react';
import bitcoin_loader from "../assets/bitcoin_loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
  <div className="flex items-center space-x-4">
    <img src={bitcoin_loader} alt="Loading..." className="w-8 h-8" />
    <span className="text-black text-lg font-medium">Loading...</span>
  </div>
</div>

  );
};

export default Loader;
