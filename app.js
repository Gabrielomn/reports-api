const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

require('./router.js')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is listening on port ${PORT}`))