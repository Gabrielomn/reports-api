const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
app.options('*', cors())
require('./router.js')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is listening on port ${PORT}`))