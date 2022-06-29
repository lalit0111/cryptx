import React from "react";
import logo from "../assets/coinImage.png";
import { CryptoState } from "../CryptoContext";

const CoinInfoItem = (coin) => {
  const { symbol } = CryptoState();

  const {
    name,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
    market_cap_change_percentage_24h,
    market_cap_rank
  } = coin;
  var gain = price_change_percentage_24h >= 0;
  return (
    <li>
      <div className="coin-container">
        <div className="div-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9e9e9e"
            fill="#9e9e9e"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
          <p>{market_cap_rank}</p>
        </div>
        <div className="div-2">
          <div>
            <img src={image} />
            <p>{name}</p>
          </div>
          <div>
            <p className="symbol">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="div-3">
          <p>{symbol + current_price}</p>
          <p
            className="price-change-24h"
            style={
              gain
                ? { color: "#059669", fontWeight: 700 }
                : { color: "#E11D48", fontWeight: 700 }
            }
          >
            {price_change_percentage_24h.toFixed(2) + " %"}
          </p>
          <p
            style={
              gain
                ? { color: "#059669", fontWeight: 700 }
                : { color: "#E11D48", fontWeight: 700 }
            }
          >
            {market_cap_change_percentage_24h.toFixed(2) + " %"}
          </p>
          <p>{symbol + market_cap}</p>
        </div>
      </div>
      <div className="line" />
    </li>
  );
};

export default CoinInfoItem;
