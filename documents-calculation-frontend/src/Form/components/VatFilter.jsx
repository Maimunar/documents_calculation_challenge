import React from "react";

export const VatFilter = ({ setVatFilter }) => {
  const handleChange = (e) => setVatFilter(e.target.value);
  return (
    <div className="vat-filter-container">
      <label htmlFor="vat-filter" className="vat-filter-label">
        <p>(Optional)</p> Filter by vat number:
      </label>
      <input
        type="text"
        name="vat-filter"
        className="vat-filter"
        onChange={handleChange}
      />
    </div>
  );
};
