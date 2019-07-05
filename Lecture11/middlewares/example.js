const app = require('express')()

function m1 (req, res, next) {
  console.log('m1 running')
  if (req.query.end == 1) {
    return res.send('Done at 1')
  }
  next()
  console.log('more things 1')
}
function m2 (req, res, next) {
  console.log('m2 running')
  next()
  console.log('more things 2')
}
function m3 (req, res, next) {
  console.log('m3 running')
  next()
}
function m4 (req, res, next) {
  console.log('m4 running')
  console.log('url', req.url)
  console.log('originalUrl', req.originalUrl)
  console.log('path', req.path)
  next()
}
function m5 (req, res, next) {
  console.log('m5 running')
  next()
}

app.use(m1)
app.use(m2)
app.use(m3)
app.use('/a', m4)
app.use('/b', m5)
app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/a', (req, res) => {
  res.send('Hi from A')
})


app.listen(3666)