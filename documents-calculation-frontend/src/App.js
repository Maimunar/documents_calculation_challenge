import "./App.css";
import React, { useState } from "react";
import { Error } from "./Error";
import { Form } from "./Form";
import { ResultDisplay } from "./ResultDisplay";

export const App = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  //? Shorthand fragments are "clean", but more confusing for people that dont know the shorthand. I prefer to always be explicit and import the Fragment
  return (
    <>
      <Error error={error} setError={setError} />
      <Form setError={setError} setResult={setResult} />
      <ResultDisplay result={result} />
    </>
  );
};
