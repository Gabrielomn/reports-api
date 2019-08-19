const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
    next();
    });
require('./router.js')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is listening on port ${PORT}`))