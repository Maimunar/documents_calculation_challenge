const express = require('express')
const healthCheckRoute = require('./healthCheck')
const invoiceCalculatorRoute = require('./invoiceCalculator')
const router = express.Router()

/*
    Main router (Note that the router starts at URI /api)    
*/
module.exports = () => {
    router.use('/healthCheck', healthCheckRoute())
    router.use('/calculateInvoice', invoiceCalculatorRoute())
    return router
}