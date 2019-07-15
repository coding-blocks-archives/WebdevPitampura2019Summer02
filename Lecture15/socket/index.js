const express = require('express')

const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

io.on('connection', socket => {
    console.log("client connected")

    socket.on('admin:play', function () {
        socket.broadcast.emit('play');
    })

    socket.on('admin:stop', function () {
        socket.broadcast.emit('stop');
    })

    // setTimeout(() => {
    //     socket.emit('stop')
    // }, 5000)
})


app.get('/', (req, res) => {
    res.send('OK')
})

http.listen(8080, function () {
    console.log("Running on 8080")
})

module.exports = {
    io
}