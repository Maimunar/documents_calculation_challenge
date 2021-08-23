const chai = require('chai')
const should = chai.should()
const { parseCurrencies } = require('../../src/controllers/invoiceCalculator/invoiceCalculator')
import { CURRENCIES, INVALID_CURRENCY_EXCEPTION, INVALID_VALUE_EXCEPTION } from '../util/consts'


const testCurr = 'USD'

context("Parse Currencies Function", () => {
    it('Should return the same list of correct currencies', () => {
        const result = parseCurrencies(CURRENCIES)
        Object.keys(result).length.should.equal(Object.keys(CURRENCIES).length)
        result[testCurr].should.equal(CURRENCIES[testCurr])
    })
    it('Should provide a proper exception on trying to pass an invalid currency', () => {
        const localCurrency = {...CURRENCIES, 'NotACurrency': 1.0}
        should.throw(() => parseCurrencies(localCurrency), INVALID_CURRENCY_EXCEPTION)
    })
    it('Should provide a proper exception on trying to pass an invalid value for a currency', () => {
        const localCurrency = {...CURRENCIES, 'GBP' : 'invalid value'}
        should.throw(() => parseCurrencies(localCurrency), INVALID_VALUE_EXCEPTION) 
    })
})