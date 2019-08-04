const express = require('express')
const session = require('express-session')


const app = express()

app.use(session({
    secret: 'this is encryption',
    saveUninitialized: true,
    cookie: {secure: false}   //true for https, https is end to end encryption
}))


app.get('/', (req, res) =>{
    req.session.count = req.session.count || 0
    req.session.count++
    res.send(String(req.session.count))
})


app.listen(3010, () => console.log('Running at 3010'))