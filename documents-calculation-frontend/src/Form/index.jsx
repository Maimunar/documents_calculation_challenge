import axios from "axios";
import React, { useState } from "react";
import { CurrencyAdder } from "./components/CurrencyAdder";
import { FileUpload } from "./components/FileUpload";
import { OutputCurrency } from "./components/OutputCurrency";
import { VatFilter } from "./components/VatFilter";

export const Form = ({ setError, setResult }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [outputCurrency, setOutputCurrency] = useState("");
  const [vatFilter, setVatFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile || currencies.length === 0 || outputCurrency === "") {
      setError("Please fill in all values and upload a file!");
      return;
    }

    const dataToSend = new FormData();
    dataToSend.append("csvFile", selectedFile, selectedFile.name);
    dataToSend.append("outputCurrency", outputCurrency);
    currencies.forEach((currency) =>
      dataToSend.append(currency.name, currency.value)
    );
    if (vatFilter !== "") dataToSend.append("vat", vatFilter);

    axios
      .post("http://localhost:8000/api/calculateInvoice", dataToSend)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => err?.response?.data ? setError (err.response.data) : setError(err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Invoice Calculator</h1>
        <FileUpload
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setError={setError}
        />
        <CurrencyAdder
          currencies={currencies}
          setCurrencies={setCurrencies}
          setError={setError}
        />
        <OutputCurrency
          outputCurrency={outputCurrency}
          setOutputCurrency={setOutputCurrency}
          currencies={currencies}
        />
        <VatFilter setVatFilter={setVatFilter} />
        <input type="submit" className="submit-btn" />
      </div>
    </form>
  );
};
