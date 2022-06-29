import React from "react";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  const handleOnClick = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="header-container">
      <h3 className="logo">
        Crypt<span>X</span>
      </h3>
      <div className="btn-container">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {currency}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <h6 className="dropdown-header">Select currency</h6>
            <button
              className="dropdown-item"
              value={"INR"}
              onClick={handleOnClick}
            >
              <span>₹ </span>INR
            </button>
            <button
              className="dropdown-item"
              value={"USD"}
              onClick={handleOnClick}
            >
              <span>$ </span>USD
            </button>
          </div>
        </div>
        {/* <button className="login-btn">Login</button>
        <button className="register-btn">Register</button> */}
      </div>
    </div>
  );
};

export default Header;
