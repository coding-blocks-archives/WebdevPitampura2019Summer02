const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'nobody can guess',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

app.get('/', (req, res) => {
    req.session.count = req.session.count || 0
    req.session.count ++
    res.send(String(req.session.count))
})

app.listen(8081)