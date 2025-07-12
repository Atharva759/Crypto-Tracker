
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar"
import Loader from "../../components/Loader";

const News = () => {
  const [news,setnews] = useState([]);
  const [input,setInput] = useState("crypto");
  const newskey = import.meta.env.VITE_news_key;
  

  const fetchdata = async() =>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&from=2025-07-11&sortBy=publishedAt&apiKey=${newskey}`)
    const data = await res.json();
    setnews(data.articles);
  }
  useEffect(()=>{
    fetchdata();
  },[]);

  
  

  return (<>
    <div className="p-6 bg-gray-100">
    <Navbar showCurrencySelector={false}/>
  {news.length === 0 ? (
    <Loader/>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[450px]" // Card height
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-4">
              {article.description || "No description available."}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">Author:</span>{" "}
              {article.author || "Unknown"}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <span className="font-medium">Published:</span>{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <div className="mt-auto">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

                </>
  );
}

export default News
