import React, { useState, useEffect } from "react";
import icon from "../assets/coinImage.png";
import HistoricChart from "./HistoricChart";
import { CryptoState } from "../CryptoContext";

const ItemInfo = ({ coin }) => {
  const converter = (num) => {
    var units = ["M", "B", "T", "Q"];
    var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    var r = unit % 3;
    var x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
    return x.toFixed(2) + " " + units[Math.floor(unit / 3) - 2];
  };

  const { currency, symbol } = CryptoState();

  const price = coin.market_data.current_price;

  const [currency_price, setCurrencyPrice] = useState(
    price[currency.toLowerCase()]
  );

  const market_cap = coin.market_data.market_cap;
  const [currency_market_cap, setCurrencyMarketCap] = useState(
    market_cap[currency.toLowerCase()]
  );

  const [convertedMarketCap, setConvertedMarketCap] = useState(
    converter(currency_market_cap)
  );

  useEffect(() => {
    setCurrencyPrice(price[currency.toLowerCase()]);
    setCurrencyMarketCap(market_cap[currency.toLowerCase()]);
    setConvertedMarketCap(converter(currency_market_cap));
  }, [currency]);

  if (!coin) {
    return (
      <div className="loading spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    console.log(coin);
  }

  function shorten(str, maxLen = 200, separator = " ") {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  return (
    <div className="item-info-container">
      <div className="info-item-div1">
        <div className="info-item-div1-div1">
          <img src={coin.image.large}></img>
          <h2>{coin.name.toUpperCase()}</h2>
          <p>{shorten(coin.description.en) + "..."}</p>
        </div>
        <div className="info-item-div1-div2">
          <h3>
            Rank : <span> {coin.coingecko_rank}</span>
          </h3>
          <h3>
            Current Price : <span> {symbol + currency_price}</span>
          </h3>
          <h3>
            Market Cap. : <span> {symbol + convertedMarketCap}</span>
          </h3>
        </div>
      </div>
      <div className="info-item-seperator"></div>
      <HistoricChart coin={coin} />
    </div>
  );
};

export default ItemInfo;
