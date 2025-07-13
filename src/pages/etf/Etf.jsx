import { Link } from "react-router-dom";
import Sample from "../../assets/sample.png";
const Etf = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-gray-300">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-700">
            🚧 Under Development 🚧
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            This feature is currently being worked on. Please check back later.
          </p>
          <div className="mt-6 flex justify-center items-center">
            <img className="w-2xs " src={Sample} />
          </div>
          <Link
            to="/"
            className="relative top-3 p-2 bg-gray-600 rounded-md text-white"
          >
            Back to HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Etf;
