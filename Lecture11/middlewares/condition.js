const express = require('express')

const app = express()

let i = 0

app.use((req, res, next) => {
    console.log("In Middleware")
    if (i%2) {
        next()
    }
    i++;
})

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(3000)