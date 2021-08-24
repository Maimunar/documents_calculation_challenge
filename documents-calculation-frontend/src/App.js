import "./App.css";
import React, { useState } from "react";
import { Error } from "./Error";
import { Form } from "./Form";
import { ResultDisplay } from "./ResultDisplay";

export const App = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <>
      <Error error={error} setError={setError} />
      <Form setError={setError} setResult={setResult} />
      <ResultDisplay result={result} />
    </>
  );
};
