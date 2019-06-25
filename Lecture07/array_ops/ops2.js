let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr1 = arr.map((item) => item+=10)

arr2 = arr.map((item) => {
    item+=1;
})

console.log(arr2)
console.log(arr1)