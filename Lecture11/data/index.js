const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
    const { name = 'Anon' } = req.query
    res.send('Hello ' + name)
})

app.get('/users/:name/details', (req, res) => {
    console.log(req.params)
    res.send('you asked for ' + req.params.name)
})

app.post('/', (req, res) => {
    const { name = 'Anon' } = req.body
    res.send('Hello (via POST) ' + name)
})

app.listen(3000)