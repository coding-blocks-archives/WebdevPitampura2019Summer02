const express = require('express')

const app = express()

function m1 (req, res, next) {
    console.log("m1")
    next()
}

function m2 (req, res, next) {
    console.log("m2")
    next()
}

app.get('/', (req, res, next) => {
   res.send('OK')
   next()
})

app.use(m1)

app.get('/users', (req, res) => {
    res.send('GOT users')
})

app.use('/users', m2)

app.get('/users/1', (req, res) => {
    res.send('GOT users/1')
})

app.listen(3000)