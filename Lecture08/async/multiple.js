// setTimeout(() => {
//     console.log(1)
// }, 0)

// setTimeout(() => {
//     console.log(2)
// }, 0)

const id = setInterval(() => {
    console.log("every 1 sec")
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 5100)

console.log(3)