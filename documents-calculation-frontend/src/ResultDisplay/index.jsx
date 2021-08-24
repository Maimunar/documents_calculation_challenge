import React from "react";

export const ResultDisplay = ({ result }) => {
  return (
    result && (
      <div className="container">
        <h2>Invoice Results: </h2>
        {result.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
      </div>
    )
  );
};
