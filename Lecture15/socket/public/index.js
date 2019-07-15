const socket = io()

window.onload = function () {
    const audio = document.getElementById('player')
    
    socket.on('play', function () {
        console.log("Playing....", audio)
        audio.play()
    })

    socket.on('stop', function () {
        audio.pause()
    })
}
