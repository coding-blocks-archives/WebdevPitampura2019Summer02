 let arr = [1,2,3,4,5,6,7,8]

 function odd(num){
     if(num%2==0) return false;

     else return true;
 }


 arr1 = arr.filter(odd)

 console.log(arr1)

let arr = [1,2,3]

let sum = arr.reduce((acum,item) => {
    return acum+item
})

mean = sum/arr.length;

console.log(sum)
console.log(mean)

