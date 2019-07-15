const express = require('express')

const app = express()
const hbs = require('hbs')

const path = require('path')

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, '/partials'))




app.get('/', (req, res) =>{
    res.render('index',{
        name : 'Harsh'
    })
})



app.get('/about', (req, res) =>{
    res.render('about')
})
app.listen(3000, function(){
    console.log('running on 3000')
})
