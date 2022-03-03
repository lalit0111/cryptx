import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h3 className="logo">
        Crypt<span>X</span>
      </h3>
      <div className="btn-container">
        <div className="currency-menu">
          <p>USD</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-caret-down"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#059669"
            fill="#059669"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
          </svg>
        </div>
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Header;
