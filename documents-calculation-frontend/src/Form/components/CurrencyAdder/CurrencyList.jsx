import React from "react";
import { CURRENCIES } from "../../../util/consts";

export const CurrencyList = ({ selectedCurrency, setSelectedCurrency }) => {
  const handleChange = (e) => setSelectedCurrency(e.target.value);
  return (
    <>
      <label htmlFor="currencies">Pick a currency: </label>
      <select
        name="currencies"
        value={selectedCurrency}
        onChange={handleChange}
        className="currencies"
      >
        {CURRENCIES.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </select>
    </>
  );
};
