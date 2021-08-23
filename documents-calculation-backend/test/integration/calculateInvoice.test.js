import chai from 'chai'
const should = chai.should()
const sinon = require('sinon')

const { calculateInvoice } = require('../../src/controllers/invoiceCalculator')
import { WRONG_REQUEST_BODY, REQUEST_BODY, FULL_CSV, INSUFFICIENT_CURRENCIES_EXCEPTION } from '../util/consts'

describe('Integration Testing', () => {
    context('Invoice Calculator Route', () => {
        it('Should succesfully run the request with the full data', () => {
            let req,res,spy;
            req = res = {};
            req.file = {buffer: FULL_CSV}
            req.body = REQUEST_BODY;
            spy = res.send = sinon.spy();
            calculateInvoice(req,res)
            spy.callCount.should.equal(1)
        })
        it('Should return a status 400 message upon error', () => {
            let req,res;
            req = res = {};
            req.file = {buffer: FULL_CSV}
            req.body = WRONG_REQUEST_BODY
            res = {
                status: function(responseStatus) {

                    responseStatus.should.equal(400)
                    // This next line makes it chainable
                    return this; 
                },
                send: function(err) {
                    err.should.equal(INSUFFICIENT_CURRENCIES_EXCEPTION)
                }
            }
            calculateInvoice(req,res)
        })
    })
})