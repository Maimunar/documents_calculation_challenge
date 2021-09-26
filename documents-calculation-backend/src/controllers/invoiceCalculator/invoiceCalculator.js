import * as CSV from "csv-string";

/*
    The task requires a setData method, this, however, makes it a bit harder
    To make simultaneous requests possible, which is why I will use a parseData
    pure function for the task
*/
/*
    Normally I would save a temporary file with multer and work on it
    But one of the requirements expected an in-memory solution, so this
    Is my approach
*/
exports.parseData = (fileToRead) => {
	const invoices = CSV
		// Parsing the CSV string
		.parse(String(fileToRead))
		// Removing the headers row (library doesnt do that for me)
		.slice(1)
		// Library gives me a list of lists - I prefer working with objects
		// This step could be skipped for performance reasons, but I value
		// code readability more for this challenge
		.map((current) => ({
			Customer: current[0],
			"Vat number": current[1],
			"Document number": current[2],
			Type: current[3],
			"Parent document": current[4],
			Currency: current[5],
			Total: current[6],
		}));
	// Invoice validation

	let faultyInvoices = invoices.filter(
		(invoice) =>
			invoice["Parent document"] !== "" &&
			!invoices.some(
				(anotherInvoice) =>
					anotherInvoice["Document number"] === invoice["Parent document"]
			)
	);
	if (faultyInvoices.length > 0)
		throw `Invoice number ${faultyInvoices[0]["Document number"]}'s Parent number is not available in the data you have provided.`;
	return invoices;
};

// No real parsing, mostly validation
exports.parseCurrencies = (currencies) => {
	const allowedCurrencies = ["EUR", "GBP", "BGN", "USD"];
	if (
		Object.keys(currencies).some(
			(currency) => !allowedCurrencies.includes(currency)
		)
	) {
		throw `You tried to enter an invalid currency - the allowed currencies currently are ${allowedCurrencies}`;
	}
	for (const currency in currencies) {
		if (isNaN(currencies[currency]))
			throw "Please provide proper values for the currencies";
	}
	return currencies;
};

/*
    Main method that takes all the gathered data and returns the expected output
*/
exports.getTotal = (data, currencies, outputCurrency, vat) => {
	// 1. Filters the data by VAT (if needed)
	if (vat) data = data.filter((invoice) => invoice["Vat number"] === vat);

	// 2. Uses the currencies and the selected output currency to calculate the expected totals
	const output = {};

	data.forEach((invoice) => {
		const vatNum = invoice["Vat number"];
		if (Object.keys(output).includes(vatNum)) {
			if (output[vatNum]["Customer"] === invoice["Customer"]) {
				const currentMoney = output[vatNum]["Total"];
				let addMoney = convertMoney(invoice, currencies, outputCurrency);
				output[vatNum]["Total"] = round(currentMoney + addMoney);
			} else
				throw "A customer can only have one VAT number - please make sure that is the case in your data";
		} else {
			output[vatNum] = {
				Customer: invoice["Customer"],
				Total: convertMoney(invoice, currencies, outputCurrency),
			};
		}
	});
	// 3. Returns a list of results
	const listOutput = [];
	for (const invoice in output) {
		listOutput.push(
			`Customer ${output[invoice]["Customer"]} - ${output[invoice]["Total"]} ${outputCurrency}`
		);
	}
	if (listOutput.length === 0)
		listOutput.push("None. Are you sure you provided the correct VAT Number?");
	console.log(listOutput);
	return listOutput;
};

// Private function for converting money given the currencies
const convertMoney = (invoice, currencies, outputCurrency) => {
	const { Total, Currency, Type } = invoice;
	if (!Object.keys(currencies).includes(Currency))
		throw "Please provide all currencies listed in the data file";
	// The 'amplifier' of the input currency
	const inputAmp = currencies[Currency];
	// The 'amplifier' of the output currency
	const outputAmp = currencies[outputCurrency];

	// We don't need a currency that defaults to 1, as we can just divide the input value
	// By the input currency and use that as default
	const value = round((Total / inputAmp) * outputAmp);
	return Type == "2" ? -value : value;
};

const round = (num) => Math.round(num * 100) / 100;
