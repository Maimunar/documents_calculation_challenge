const chai = require("chai");
const should = chai.should();
const {
  parseData,
} = require("../../src/controllers/invoiceCalculator/invoiceCalculator");
import {
  VALIDCSV,
  INVALID_INVOICE,
  INVALID_INVOICE_EXCEPTION,
} from "../util/consts";

context("Parse Data Function", () => {
  it("Should pass when given valid csv data", () => {
    const result = parseData(VALIDCSV);
    result.length.should.equal(1);
  });
  it("Should provide a proper exception on given data without a correct parent document", () => {
    const INVALIDCSV = VALIDCSV + "\n" + INVALID_INVOICE;
    should.throw(() => parseData(INVALIDCSV), INVALID_INVOICE_EXCEPTION);
  });
});
