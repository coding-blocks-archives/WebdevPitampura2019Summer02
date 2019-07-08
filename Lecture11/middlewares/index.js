const express = require('express')
//middle wares
//functions, with this signature
// (req, res, next)=>

const app = express()
app.get('/' , (req, res, next)=>{
    console.log("hello")
    next()
})

app.get('/' , (req, res)=>{
    res.send('Test');
})


app.listen(3000)