import React from "react";

export const CurrencyDisplay = ({ currencies }) => (
  <div className="currency-list">
    <h3>Currently added currencies: </h3>
    {currencies.map((currency) => (
      <p key={currency.name}>
        {currency.name} : {currency.value}
      </p>
    ))}
  </div>
);
