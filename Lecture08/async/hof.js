// const generatePromise = (val, n) => 
//     new Promise((resolve) => setTimeout(() => resolve(val), n))

// const generatePromise = function (val, n) {
//     const fn = function (resolve) {
//         setTimeout(function () {
//             resolve(val)
//         }, n)
//     } 
//     return new Promise(fn)
// }


// generatePromise(1, 1000).then(console.log)
// generatePromise(2, 2000).then(console.log)
// generatePromise(3)(3000).then(console.log)
// generatePromise(4, 4000).then(console.log)

const generatePromiseHOF = val => n => 
    new Promise((resolve) => setTimeout(() => resolve(val), n))

const resolve3After = generatePromiseHOF(3)

