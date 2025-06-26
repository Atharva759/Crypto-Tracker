import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <span className="text-blue-600 text-lg font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
