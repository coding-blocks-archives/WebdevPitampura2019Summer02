let arr= [1, 2, 3, 4, 5, 6, 7]

arr1 = arr.reduce((acum, item) => {
    return acum + item
})

console.log(arr1)