let arr = [
    "Hello",
    "Hey",
    "Hiiiiii"
];

function filterFunction(str) {
    if(str.length < 4) return false;
    else return true;
}

arr1 = arr.filter(filterFunction)

console.log(arr1);

// One Liners
let arr = [1, 2, 3];

let mean = arr.reduce((acum, item) => {
    return acum + item
})/arr.length;

// console.log(sum)
console.log(mean)