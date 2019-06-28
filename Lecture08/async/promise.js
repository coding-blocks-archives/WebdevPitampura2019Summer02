function download (url) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("New Error")
        }, 1000)
    })
    return promise
}

function resize (file) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resized File")
        }, 2000)
    })
    return promise
}

function upload (file) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("cb.lk/secret.jpg")
        }, 5000)
    })
    return promise
}


const downloadedFile = download('cb.lk/file.jpg')
const promise = downloadedFile.then(file => {
    return resize(file)
}).catch(err => {

})
.then(resizedFile => {
    return upload(resizedFile)
}).then(url => {
    console.log(url)
}).catch(err => {
    console.log(err)
}).then(() => {
    console.log("Always")
    throw new Error("Some err")
}).catch(err => {
    console.log("error Again")
})
