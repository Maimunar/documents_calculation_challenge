import express from 'express'
import { healthCheck } from '../../controllers/healthCheck'
const router = express.Router()

module.exports = () => {
    router.get('/', healthCheck)

    return router
}