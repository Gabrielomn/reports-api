const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig.json')
router.post('/', (req, res) => {
    const pin = req.body.pin
    if(pin != "El Psy Congroo"){
        return res.status(401).json("Invalid PIN")
    }
    const token = jwt.sign({ pin: pin }, authConfig.secret, {
        expiresIn: 600
    })

    if(token){
        res.status(200).send({token})
    }
})

module.exports = router