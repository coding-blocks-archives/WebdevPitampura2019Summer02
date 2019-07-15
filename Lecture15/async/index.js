const generatePromise = (n, v) => new Promise(resolve => {
  setTimeout(() => {
    resolve(v)
  }, n * 1000)
})

// const download = generatePromise(5, "File Data")
// const resize = generatePromise(2, "Resized File")
// const upload = generatePromise(1, "uploaded File")


// download.then(resize).then(upload)

// download.then(file => {
//   const splitedFile = file.split(',') 

//   return [resize, splitedFile]
// }).then(([resizedFile, splitedFile]) => {

// })


async function fn () {
  console.log("start")

  await generatePromise(5, "File Data")

  console.log("done Promise")

  await generatePromise(8, "Another Promise")

  console.log("Done Function")
}

console.log(fn())