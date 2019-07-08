const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')

app.set('view engine', 'hbs')

hbs.registerPartials(path.join(__dirname, '/partials' ))

app.get('/', (req, res) => {
    res.render('index', {
        name: "<b>Abhishek</b>"
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        name: '<b>Abhishek</b>',
        description: 'I explain with words and code.',
        obj: {
            name: 'XYZ'
        }
    })
})



app.listen(3000, function () {
    console.log("Running on 3000")
})