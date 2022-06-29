import React, { useEffect, useState } from "react";
import ItemInfo from "../components/ItemInfo";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";

const Info = () => {
  const { id } = useParams();
  console.log(id);
  const [coin, setCoin] = useState();
  const { currency } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <h1>Loading</h1>;
  return <div>{<ItemInfo coin={coin} />}</div>;
};

export default Info;
