const express = require('express')
const reportController = require('./services/report.controller')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
router.use((req,res,next) => {
  res.setHeader('Content-Type', 'application/json')
  next();
});


router.post('/report', reportController.create)
router.get('/report', reportController.getAll)
router.get('/report/:id', reportController.getByID)
router.delete('/report/:id', reportController.delete)
router.put('/report/:id', reportController.update)

module.exports = (app) =>{
    app.use('/', router)


}