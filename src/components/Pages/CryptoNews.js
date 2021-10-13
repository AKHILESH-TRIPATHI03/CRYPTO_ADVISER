import React, { useEffect, useState } from "react";
import News from "./News";
import "./CryptoNews.css";

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    showUserData();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = news.filter((info) =>
    info.name.toLowerCase().includes(search.toLowerCase())
  );
  const showUserData = async () => {
    const information = await fetch(
      "https://coinpaprika1.p.rapidapi.com/exchanges",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
          "x-rapidapi-key":
            "d65a89922fmsh958cd5c3a77264ap190156jsn03a956654cb8",
        },
      }
    );
    let output = await information.json();
    setNews(output);
  };
  console.log(news);
  return (
    <div className="coindoc-main">
      <p className="paragraph">Welcome to CoinsInfo</p>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a Crypto for news</h1>
          <form>
            <input
              type="text"
              placeholder="searcryptonews"
              className="coin-input"
              onChange={handleChange}
            ></input>
          </form>
        </div>
      </div>
      {filteredCoins.map((info) => {
        return (
          <>
            <News
              key={info.id}
              name={info.name}
              description={info.description}
              date={info.last_updated}
            />
          </>
        );
      })}
    </div>
  );
};

export default CryptoNews;
