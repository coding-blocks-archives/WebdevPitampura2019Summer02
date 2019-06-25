let arr = [2,3,4,5,6,7,8,9]
 

let rms = Math.sqrt((arr.map((item) => item*item))
    .reduce((acum,item)=>{
    return acum+item;
})/arr.length)

console.log(arr)

console.log(rms)