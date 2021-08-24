import React, { useEffect } from "react";

export const OutputCurrency = ({
  outputCurrency,
  setOutputCurrency,
  currencies,
}) => {
  const handleChange = (e) => setOutputCurrency(e.target.value);
  // Making sure that this updates the value accordingly when the first currency is added
  useEffect(() => {
    if (currencies.length === 1 && outputCurrency === "") {
      setOutputCurrency(currencies[0].name);
    }
  }, [currencies]);
  return (
    <div className="output-currency-container">
      <label htmlFor="output-currency" className="output-currency-label">
        Define an output currency:
      </label>
      <select
        name="output-currency"
        value={outputCurrency}
        onChange={handleChange}
        className="output-currency"
      >
        {currencies.map((val) => (
          <option value={val.name} key={val.name}>
            {val.name}
          </option>
        ))}
      </select>
    </div>
  );
};
