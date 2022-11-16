const express = require('express')

const app = express()

app.use(express.json())

const routes = require('./Routes/routes')

app.use(routes)

app.listen(3000)