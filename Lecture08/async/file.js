function download (url, callback) {
    let file = "Some data here"
    setTimeout(() => {
        callback(null, file)
    }, 3000)
}

function resize (file, callback) {
    let resizedFile = "Compressed Stuff Here"
    setTimeout(() => {
        callback(null, resizedFile)
    }, 5000)
}

function upload (file, callback) {
    let url = "cb.lk/file.jpg"
    setTimeout(() => {
        callback(null, url)
    }, 10000)
}


download('cb.lk/secret' , (err, file) => {
    if (err) {
        // handleError
    }
    resize(file, resizedFile => {
        upload(resizedFile, url => {
            console.log(url)
        })
    })
})