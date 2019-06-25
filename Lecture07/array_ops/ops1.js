let arr = [3,4,8,2,3,5,6,7,1,92]

arr.sort();
console.log(arr);

function compare(a,b){
    if(a>b) return true;
    else return false;
}

arr.sort(compare)

console.log(arr)