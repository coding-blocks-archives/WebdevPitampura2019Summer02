const express = require('express')
const app = express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')


app.set('view engine', 'hbs')


app.use(express.urlencoded({extended: true}))

passport.use(new LocalStrategy((username, password, done) => {
    if (username == 'harsh' && password == 'test') {
        done(null, {
            id: 1,
            name: "Harsh"
        })
    } else {
        done(null, false)
    }
}))

app.use(session({
    secret: 'nobody can guess',
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})

app.get('/', (req, res) => {
    res.render('index', {user: req.user})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))


app.listen(3000, function(){
    console.log('Running on 3000')
})