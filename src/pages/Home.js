import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoinInfoItem from "../components/CoinInfoItem";
import SingleCurrency from "../components/SingleCurrency";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    color: "#ecfdf5",
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-left"
        width="70"
        height="70"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#059669"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    ),
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-right"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#059669"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="13" y1="18" x2="19" y2="12" />
        <line x1="13" y1="6" x2="19" y2="12" />
      </svg>
    )
  };

  return (
    <div>
      <h1 className="title">Everything About Crypto-Currency</h1>
      <p className="tagline">
        Get All The information Regarding Your Favorite Crypto-currency
      </p>

      <div className="slider-container">
        <Slider {...settings}>
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
          <SingleCurrency />
        </Slider>
      </div>

      <h2>Cryptocurrency Prices By Market Cap</h2>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-search"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>

        <p>Search For Crypto-currency </p>
      </div>

      <div>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>1h</p>
        <p>24h</p>
        <p>Market Cap.</p>
      </div>

      <ol>
        <CoinInfoItem />
        <CoinInfoItem />
        <CoinInfoItem />
      </ol>

      <div>//Pagination Component</div>
    </div>
  );
};

export default Home;
