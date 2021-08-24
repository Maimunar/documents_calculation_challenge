import React from "react";

export const CurrencyValue = ({ currencyValue, setCurrencyValue }) => {
  const handleChange = (e) => setCurrencyValue(e.target.value);
  return (
    <>
      <label htmlFor="currency-value">Input that currency's value:</label>
      <input
        type="number"
        min="0"
        step="0.01"
        name="currency-value"
        className="currency-value"
        value={currencyValue}
        onChange={handleChange}
      />
    </>
  );
};
