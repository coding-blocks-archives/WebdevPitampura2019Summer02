const express = require('express')
const app = express()
const todoRouter = require('./todo')

app.use(express.static(__dirname+ '/public'))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())

app.use('/api/todos', todoRouter)

app.listen(3000, function () {
    console.log("Running on 3000")
})