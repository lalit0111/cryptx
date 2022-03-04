import React from "react";
import icon from "../assets/coinImage.png";

const SingleCurrency = () => {
  var gain = false;
  return (
    <div className="single-coin">
      <img src={icon}></img>
      <p>
        LTC{" "}
        <span style={gain ? { color: "#059669" } : { color: "#E11D48" }}>
          +10.3%
        </span>
      </p>
      <p className="price">₹ 8,807.22</p>
    </div>
  );
};

export default SingleCurrency;
