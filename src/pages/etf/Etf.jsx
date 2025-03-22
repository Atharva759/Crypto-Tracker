import React from 'react'

const Etf = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-700">🚧 Under Development 🚧</h2>
        <p className="mt-4 text-xl text-gray-600">
          This feature is currently being worked on. Please check back later.
        </p>
        <div className="mt-6">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default Etf
