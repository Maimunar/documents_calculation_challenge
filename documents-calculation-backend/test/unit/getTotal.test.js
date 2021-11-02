const chai = require("chai");
const should = chai.should();
const {
  getTotal,
} = require("../../src/controllers/invoiceCalculator/invoiceCalculator");
import {
  CURRENCIES,
  FULL_CURRENCIES,
  FULL_DATA,
  VAT,
  OUTPUT_CURRENCY,
  INSUFFICIENT_CURRENCIES_EXCEPTION,
  WRONG_VAT_INVOICE,
  WRONG_VAT_NUMBER_EXCEPTION,
} from "../util/consts";

context("Get Total Function", () => {
  it("should succesfully calculate invoice without VAT filter for full test file", () => {
    const result = getTotal(FULL_DATA, FULL_CURRENCIES, OUTPUT_CURRENCY, null);
    result.length.should.equal(3);
  });

  it("should succesfully calculate invoice with VAT filter", () => {
    const result = getTotal(FULL_DATA, FULL_CURRENCIES, OUTPUT_CURRENCY, VAT);
    result.length.should.equal(1);
  });

  it("should provide a proper exception when the currency list provided does not include a currency in the data", () => {
    should.throw(
      () => getTotal(FULL_DATA, CURRENCIES, OUTPUT_CURRENCY, null),
      INSUFFICIENT_CURRENCIES_EXCEPTION
    );
  });

  it("should provide a proper exception when a customer has more than one VAT number", () => {
    const LOCAL_DATA = [...FULL_DATA, WRONG_VAT_INVOICE];
    should.throw(
      () => getTotal(LOCAL_DATA, FULL_CURRENCIES, OUTPUT_CURRENCY, null),
      WRONG_VAT_NUMBER_EXCEPTION
    );
  });
});
