let arr = [3,7,1,23,46,21,14,75,57,49,12,5]

let max = arr.reduce((acum,item)=>{
    return Math.max(acum,item);
})

console.log(arr)
console.log(max)