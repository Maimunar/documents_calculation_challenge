// General data
export const VALIDCSV = `Customer,Vat number,Document number,Type,Parent document,Currency,Total
Vendor 1,123456789,1000000257,1,,USD,400`
export const FULL_CSV = `Customer,Vat number,Document number,Type,Parent document,Currency,Total
Vendor 1,123456789,1000000257,1,,USD,400
Vendor 2,987654321,1000000258,1,,EUR,900
Vendor 3,123465123,1000000259,1,,GBP,1300
Vendor 1,123456789,1000000260,2,1000000257,EUR,100
Vendor 1,123456789,1000000261,3,1000000257,GBP,50
Vendor 2,987654321,1000000262,2,1000000258,USD,200
Vendor 3,123465123,1000000263,3,1000000259,EUR,100
Vendor 1,123456789,1000000264,1,,EUR,1600`
export const FULL_DATA = [
    {
        Customer: 'Vendor 1',
        'Vat number': '123456789',
        'Document number': '1000000257',
        Type: '1',
        'Parent document': '',
        Currency: 'USD',
        Total: '400'
    },
    {
        Customer: 'Vendor 2',
        'Vat number': '987654321',
        'Document number': '1000000258',
        Type: '1',
        'Parent document': '',
        Currency: 'EUR',
        Total: '900'
    },
    {
        Customer: 'Vendor 3',
        'Vat number': '123465123',
        'Document number': '1000000259',
        Type: '1',
        'Parent document': '',
        Currency: 'GBP',
        Total: '1300'
    },
    {
        Customer: 'Vendor 1',
        'Vat number': '123456789',
        'Document number': '1000000260',
        Type: '2',
        'Parent document': '1000000257',
        Currency: 'EUR',
        Total: '100'
    },
    {
        Customer: 'Vendor 1',
        'Vat number': '123456789',
        'Document number': '1000000261',
        Type: '3',
        'Parent document': '1000000257',
        Currency: 'GBP',
        Total: '50'
    },
    {
        Customer: 'Vendor 2',
        'Vat number': '987654321',
        'Document number': '1000000262',
        Type: '2',
        'Parent document': '1000000258',
        Currency: 'USD',
        Total: '200'
    },
    {
        Customer: 'Vendor 3',
        'Vat number': '123465123',
        'Document number': '1000000263',
        Type: '3',
        'Parent document': '1000000259',
        Currency: 'EUR',
        Total: '100'
    },
    {
        Customer: 'Vendor 1',
        'Vat number': '123456789',
        'Document number': '1000000264',
        Type: '1',
        'Parent document': '',
        Currency: 'EUR',
        Total: '1600'
    }
]
export const CURRENCIES = {
    'USD' : 1.0,
    'BGN' : 0.7,
    'EUR': 1.1
}
export const FULL_CURRENCIES = {
    'USD' : 1.0,
    'BGN' : 0.7,
    'EUR': 1.1,
    'GBP' : 1.5
}
export const OUTPUT_CURRENCY = 'BGN'
export const VAT = '123456789'
export const REQUEST_BODY = {
    ...FULL_CURRENCIES, 
    outputCurrency: OUTPUT_CURRENCY,
    vat: VAT,    
}
export const WRONG_REQUEST_BODY = {
    ...CURRENCIES, 
    outputCurrency: OUTPUT_CURRENCY,
    vat: VAT, 
}

// Wrong data for specific exceptions
export const INVALID_INVOICE = 'Vendor 2,987654321,1000000258,1,88888888888,EUR,900'
export const WRONG_VAT_INVOICE = {
    Customer: 'Vendor 2',
    'Vat number': '123456789',
    'Document number': '1000000257',
    Type: '1',
    'Parent document': '',
    Currency: 'USD',
    Total: '400'
}

// Exceptions
export const INVALID_INVOICE_EXCEPTION = 'Invoice number 1000000258\'s Parent number is not available in the data you have provided.'
export const INVALID_CURRENCY_EXCEPTION = 'You tried to enter an invalid currency - the allowed currencies currently are EUR,GBP,BGN,USD'
export const INVALID_VALUE_EXCEPTION = 'Please provide proper values for the currencies'
export const INSUFFICIENT_CURRENCIES_EXCEPTION = 'Please provide all currencies listed in the data file'
export const WRONG_VAT_NUMBER_EXCEPTION = 'A customer can only have one VAT number - please make sure that is the case in your data'