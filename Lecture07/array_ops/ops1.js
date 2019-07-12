let arr = [3, 4, 1, 2, 6, 7, 12, 34, 14];

// Deafult Lexicographical
// arr.sort();

function compare(a, b) {
    console.log(a, b);

    if(a > b) return true;
    else return false;
}

arr.sort(compare)

console.log(arr);
