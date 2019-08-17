const express = require('express')
const reportRouter = require('./services/report.router')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
// router.use((req,res,next) => {
//   res.setHeader('Content-Type', 'application/json')
//   next();
// });

router.use('/report', reportRouter)
module.exports = (app) =>{
    app.use('/', router)
}