const express = require('express')
const reportRouter = require('./services/report.router')
const botRouter = require('./services/bot')
const authenticateRouter = require('./services/authenticate')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())


router.use('/report', reportRouter)
router.use('/webHook', botRouter)
router.use('/authenticate', authenticateRouter)
module.exports = (app) =>{
    app.use('/', router)
}