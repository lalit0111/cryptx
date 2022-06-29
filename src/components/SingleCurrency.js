import React from "react";

import { CryptoState } from "../CryptoContext";

const SingleCurrency = (coin) => {
  const { symbol } = CryptoState();
  const { name, image, current_price, price_change_percentage_24h } = coin;
  var gain = price_change_percentage_24h >= 0;
  const sign = gain ? "+" : "";
  return (
    <div className="single-coin">
      <img src={image}></img>
      <p>
        {name + " "}
        <span style={gain ? { color: "#059669" } : { color: "#E11D48" }}>
          {sign + price_change_percentage_24h.toFixed(2) + "%"}
        </span>
      </p>
      <p className="price">{symbol + " " + current_price}</p>
    </div>
  );
};

export default SingleCurrency;
