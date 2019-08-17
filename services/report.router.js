const express = require('express')
const reportController = require('./report.controller')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())

router.post('/', reportController.create)
router.get('/', reportController.getAll)
router.get('/:id', reportController.getByID)
router.delete('/:id', reportController.delete)
router.put('/:id', reportController.update)

module.exports = router