import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    point: {
      radius: 1
    }
  }
};

const HistoricChart = ({ coin }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);

  const { currency, symbol } = CryptoState();

  const styleSelected = {
    color: "white",
    backgroundColor: "#059669"
  };

  const styleUnselected = {
    color: "#059669",
    backgroundColor: "white"
  };

  const [selected, setSelected] = useState(1);

  const handleOnClick = (e) => {
    const num = e.target.value;
    const num1 = parseInt(num);

    if (num1 === 1) {
      setSelected(1);
    } else if (num1 === 30) {
      setSelected(2);
    } else {
      setSelected(3);
    }

    setDays(num1);
  };
  //   console.log(coin?.id);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  if (historicData.length === 0) {
    return (
      <div className="loading spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    console.log("history");
  }
  return (
    <div className="info-item-div2">
      <Line
        options={options}
        data={{
          labels: historicData?.map((coinItem) => {
            let date = new Date(coinItem[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;

            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: historicData.map((coinItem) => {
                return coinItem[1];
              }),
              label: `Price ( Past ${days} days) in ${currency}`,
              borderColor: "#059669",
              backgroundColor: "#fff"
            }
          ]
        }}
      ></Line>
      <div className="info-item-div2-button-container">
        <button
          onClick={handleOnClick}
          className="register-btn"
          style={selected === 1 ? styleSelected : styleUnselected}
          value={"1"}
        >
          24 Hours
        </button>
        <button
          onClick={handleOnClick}
          className="register-btn"
          style={selected === 2 ? styleSelected : styleUnselected}
          value={"30"}
        >
          30 Days
        </button>
        <button
          onClick={handleOnClick}
          className="register-btn"
          style={selected === 3 ? styleSelected : styleUnselected}
          value={"90"}
        >
          3 months
        </button>
      </div>
    </div>
  );
};

export default HistoricChart;
