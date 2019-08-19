const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig.json')

module.exports = (req, res, next) => {
    let authHeader = req.headers.authorization

    if(!authHeader){
        res.status(401).json("No token provided")
    }

    const split = authHeader.split(' ')
    if(!(split.length==2)){
        res.status(401).json("token error")
    }
    const [bearer, token] = split
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            res.status(401).json("invalid token")
        else{
            return next()
        }
    })


}