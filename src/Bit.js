import React, { useState } from "react";

export default function Bit(props) {
  const [change, setChange] = useState();
  const [bit, setBit] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setChange(Number(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(props.coin[0].quotes.USD.price);
    let price = props.coin[0].quotes.USD.price;
    setBit(change * (1 / price));
  };
  return (
    <>
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
    </>
  );
}
