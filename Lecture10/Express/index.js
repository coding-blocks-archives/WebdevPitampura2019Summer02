const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("I'm here")
  res.send(`
    <html>
      <body>
        <h1> Hello From the other side </h1>
        <p style="color: red"> Hello Chrome :) </p>
      </body>
    </html>
  `)
})

app.get('/blah', function (req, res) {
  console.log("Said Blah")
  //   res.send('Hello World')
})

app.listen(3000)