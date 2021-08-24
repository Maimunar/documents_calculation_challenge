import React, { useState } from "react";
import { CurrencyDisplay } from "./CurrencyDisplay";
import { CurrencyList } from "./CurrencyList";
import { CurrencyValue } from "./CurrencyValue";
import { CURRENCIES } from "../../../util/consts";

export const CurrencyAdder = ({ currencies, setCurrencies, setError }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [currencyValue, setCurrencyValue] = useState(0.0);

  const handleClick = (e) => {
    e.preventDefault();
    if (currencyValue > 0) {
      const localCurrency = {
        name: selectedCurrency,
        value: currencyValue,
      };
      const localCurrencies = [...currencies];
      for (let i = 0; i < localCurrencies.length; i++) {
        if (localCurrencies[i].name === localCurrency.name) {
          localCurrencies[i].value = localCurrency.value;
          setCurrencies(localCurrencies);
          return;
        }
      }
      localCurrencies.push(localCurrency);
      setCurrencies(localCurrencies);
    } else setError("Please enter a positive currency value!");
  };

  return (
    <div className="currency-container">
      <CurrencyList
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <CurrencyValue
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
      />
      <button className="add-currency-btn" onClick={handleClick}>
        Add
      </button>
      <CurrencyDisplay currencies={currencies} />
    </div>
  );
};
