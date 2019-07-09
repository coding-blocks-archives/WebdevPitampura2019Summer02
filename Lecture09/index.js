const promisfy = function (fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn(...arguments, (err, result) => {
        if (err)
          return reject(err)
        resolve(result)
      })
    })
  }
}

function download (url, callback) {
  let file = "Some data here"
  setTimeout(() => {
      callback('Some Error')
  }, 3000)
}

const downloadPromise = promisfy(download)

downloadPromise("cb.lk/syx.jpg").then(file => {
  console.log(file)
}).catch(err => {
  console.log(err)
})

