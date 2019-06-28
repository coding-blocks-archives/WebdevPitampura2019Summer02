const generatePromise = (val, n) => 
new Promise((resolve)=> setTimeout(()=> resolve(val),n))


generatePromise(1,1000).then(console.log)

generatePromise(2,2000).then(console.log)

generatePromise(3,3000).then(console.log)

generatePromise(4,4000).then(console.log)