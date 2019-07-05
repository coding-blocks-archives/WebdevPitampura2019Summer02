const isNat = require('is-natural-number')

console.log(isNat(10))
console.log(isNat(0))
console.log(isNat(0, {includeZero: true}))