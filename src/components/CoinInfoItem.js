import React from "react";
import logo from "../assets/coinImage.png";

const CoinInfoItem = () => {
  var gain = true;
  return (
    <li>
      <div className="container">
        <div className="div-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-star"
            width="25"
            height="25"
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
          <p>1</p>
        </div>
        <div className="div-2">
          <img src={logo} />
          <p>Bitcoin</p>
          <p>BTC</p>
        </div>
        <div className="div-3">
          <p>₹ 32,14,520</p>
          <p
            style={
              gain
                ? { color: "#059669", fontWeight: 700 }
                : { color: "#E11D48", fontWeight: 700 }
            }
          >
            1h
          </p>
          <p
            style={
              gain
                ? { color: "#059669", fontWeight: 700 }
                : { color: "#E11D48", fontWeight: 700 }
            }
          >
            24h
          </p>
          <p>₹ 57,194,484,473,751</p>
        </div>
      </div>
      <div className="line" />
    </li>
  );
};

export default CoinInfoItem;
