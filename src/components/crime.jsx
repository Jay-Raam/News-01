// https://newsapi.org/v2/everything?q=crime&apiKey=${apiKey}

import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import "../styles/animation.css";

const Crime = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const apiKey = "fe801c8f8f0349cbbf7488ffe0c8eede";
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=crime&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseClick = () => {
    setSelectedArticle(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-8">{error}</div>;
  }

  return (
    <div className="News">
      <div className="container max-w-[1200px] mx-auto my-0">
        <h2 className="mt-5 text-center font-semibold text-xl mb-10">
          Top Headlines in India
        </h2>
        <ul className="flex justify-center items-center gap-5 flex-wrap">
          {articles.map((article, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-4 max-w-[450px]"
            >
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  className="cursor-pointer w-full h-auto"
                  alt={article.title}
                  onClick={() => handleArticleClick(article)}
                />
              ) : (
                <img
                  src="https://placehold.co/600x300/png"
                  className="cursor-pointer w-full h-auto"
                  alt={article.title}
                  onClick={() => handleArticleClick(article)}
                />
              )}
              <a
                href={article.url}
                className="no-underline text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-[18px] text-center text-white">
                  {article.title}
                </h1>
              </a>
              <h3 className="text-[15px] text-center text-white">
                {article.author}
              </h3>
              <p className="text-[15px] text-center text-white">
                {article.description}
              </p>
              <p className="text-[15px] text-center text-white">
                {formatDate(article.publishedAt)}
              </p>
              <a
                className="flex justify-center items-baseline gap-2 text-white"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">More info</button>
                <span className="arrow text-[16px] relative top-[2px]">
                  <HiOutlineArrowLongRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {selectedArticle && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-75 flex justify-center items-center">
          <div className="selected-article bg-white max-w-[800px] p-4 rounded-lg shadow-lg">
            <button
              onClick={handleCloseClick}
              className="absolute top-[30px] right-5 text-gray-600 text-2xl"
            >
              <AiOutlineCloseCircle />
            </button>
            {selectedArticle.urlToImage ? (
              <img
                src={selectedArticle.urlToImage}
                className="w-full h-auto"
                alt={selectedArticle.title}
              />
            ) : (
              <img
                src="https://placehold.co/600x300/png"
                className="w-full h-auto"
                alt={selectedArticle.title}
              />
            )}
            <h3 className="text-xl font-bold mt-2 text-black">
              {selectedArticle.title}
            </h3>
            {selectedArticle.content ? (
              <p className="text-gray-700">
                {selectedArticle.content.substring(0, 100)}...
              </p>
            ) : (
              <p className="text-gray-700">No content available.</p>
            )}
            <p className="text-gray-500 text-sm">
              {formatDate(selectedArticle.publishedAt)}
            </p>
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline block mt-2"
            >
              Read More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crime;
