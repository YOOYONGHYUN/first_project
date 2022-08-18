import React, { useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [change, setChange] = useState();
  const [bit, setBit] = useState("");
  const onChange = (e) => {
    setChange(Number(e.target.value));
  };
  const onSubmit = () => {
    setBit(change * (1 / coins[0].quotes.USD.price));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(...coins, json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD{" "}
            </option>
          ))}
        </select>
      )}

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="달러 입력"
          value={change}
        />
        <button>Convert</button>
      </form>

      {bit === "" ? null : <div>to bitcoin : {bit}</div>}
    </div>
  );
}

export default App;
