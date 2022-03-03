import React from "react";
import icon from "../assets/coinImage.png";

const SingleCurrency = () => {
  return (
    <div className="single-coin">
      <img src={icon}></img>
      <p>
        LTC <span>+10.3%</span>
      </p>
      <p className="price">₹ 8,807.22</p>
    </div>
  );
};

export default SingleCurrency;
