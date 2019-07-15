const socket = io()

function playAll () {
    socket.emit('admin:play')
}

function stopAll () {
    socket.emit('admin:stop')
}