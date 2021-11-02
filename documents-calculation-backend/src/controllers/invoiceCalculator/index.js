const { parseData, parseCurrencies, getTotal } = require("./invoiceCalculator");
/*
    Main API Function:
    1. Parses the provided CSV data
    2. Saves the currency values
    3. Calculates the total amount based on the optional filter
    4. Returns a response with the expected list of values
    URI: /api/calculateInvoice
*/
exports.calculateInvoice = (req, res) => {
  try {
    const data = parseData(req.file.buffer);
    const { vat, outputCurrency, ...unvalidatedCurrencies } = req.body;
    const currencies = parseCurrencies(unvalidatedCurrencies);
    const total = getTotal(data, currencies, outputCurrency, vat);
    res.send(total);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
