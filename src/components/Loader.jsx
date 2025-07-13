import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center space-x-4">
        <img src={loader} alt="Loading..." className="w-8 h-8" />
        <span className="text-lg font-medium text-yellow-500">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
