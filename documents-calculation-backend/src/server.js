require('dotenv').config()
import bodyParser from 'body-parser'
import express from 'express'
import routes from './routes'

const cors = require('cors')

/*
  Main server file using express
  Uses mongoose for the database and body-parser for request formatting
  PORT is saved in the .env file (in gitignore, check README)
*/
const PORT = process.env.PORT || 8000
const app = express()
/*
    Middleware
*/
app.use(cors())
app.use(bodyParser.json())
/*
  Send the request to the router
*/
app.use('/api', routes())

/*
    Let the app listen on the suggested port
*/
app.listen(PORT,
  () => console.log(`Listening on port ${PORT}`))

module.exports = app