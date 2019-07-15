const express = require('express')
const app = express()

const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

io.on('connection', socket =>{
    console.log('Client Connected')
})
app.get('/', (req, res) => {
    res.send('DONE')
})

http.listen(3000, function(){
    console.log("running on 3000")
})

module.exports ={
    io
}