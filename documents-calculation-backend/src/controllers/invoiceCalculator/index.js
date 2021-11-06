const { parseData, parseCurrencies, getTotal } = require("./invoiceCalculator");
/*
    Main API Function:
    1. Parses the provided CSV data
    2. Saves the currency values
    3. Calculates the total amount based on the optional filter
    4. Returns a response with the expected list of values
    URI: /api/calculateInvoice
*/
//? Spacing between your lines of code can make the code more readable. Its kinda like paragraphs in a story. It separates when you start doing something new
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
