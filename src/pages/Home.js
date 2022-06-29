import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoinInfoItem from "../components/CoinInfoItem";
import SingleCurrency from "../components/SingleCurrency";
import axios from "axios";
import { CoinList, TrendingCoins } from "../config/api.js";
import { CryptoState } from "../CryptoContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { currency } = CryptoState();

  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState("");

  const [allCoins, setAllCoins] = useState([]);

  const [page, setPage] = useState(1);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
    console.log(data);
  };

  const handleSearch = () => {
    return allCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const fetchAllCoins = async () => {
    const { data } = await axios.get(CoinList(currency, page));
    setAllCoins(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    fetchAllCoins();
  }, [currency]);

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
          {trending.map((singleCoin, index) => {
            const { name, image, current_price, price_change_percentage_24h } =
              singleCoin;
            return (
              <Link className="text-link" to={`info/${singleCoin.id}`}>
                <SingleCurrency
                  name={name}
                  image={image}
                  price_change_percentage_24h={price_change_percentage_24h}
                  current_price={current_price}
                  key={index}
                />
              </Link>
            );
          })}
        </Slider>
      </div>

      <h2>Cryptocurrency Prices By Market Cap</h2>

      <div className="search-bar">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="16"
            height="16"
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

          <input
            placeholder="Search For Crypto-currency"
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="desc-bar">
        <div>
          <p>#</p>
          <p>Coin</p>
        </div>
        <div className="desc-bar-second-half">
          <p>Price</p>
          <p>24h</p>
          <p>24h(Market Capital)</p>
          <p>Market Capital</p>
        </div>
      </div>
      <ol className="coin-info-item">
        {handleSearch()
          .slice((page - 1) * 10, (page - 1) * 10 + 10)
          .map((coin, index) => {
            return (
              <Link className="text-link" to={`info/${coin.id}`}>
                <CoinInfoItem {...coin} />;
              </Link>
            );
          })}
      </ol>

      <div className="pagination-container">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
              >
                Previous
              </button>
            </li>
            <li class="page-item active">
              <button class="page-link">
                {page} <span class="sr-only"></span>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link">.</button>
            </li>
            <li class="page-item">
              <button class="page-link">.</button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPage(page + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
