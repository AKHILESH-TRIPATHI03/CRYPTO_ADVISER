import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import "./CoinDoc.css";

const CoinDoc = () => {
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    showUserData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const showUserData = async () => {
    const information = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    let output = await information.json();
    setCoinData(output);
  };
  console.log(coinData);
  return (
    <div className="coindoc-main">
      <p className="paragraph">Welcome to CoinsDoc</p>
      <div className="coin-app">
        <div className="coinsearch">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              type="text"
              placeholder="searchcurrency"
              className="coin-input"
              onChange={handleChange}
            ></input>
          </form>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <>
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          </>
        );
      })}
    </div>
  );
};

export default CoinDoc;
