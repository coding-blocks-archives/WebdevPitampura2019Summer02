// Goal : remove Duplicates from array using filter function


// filter function require a boolen function which return True or False for particular element
function filterHelper(item, index, arr){ // index and arr are optioanl to take btw

    // indexOf() take a value(item here) of which we need index and takes an optional param which is start value : we use this here
    return arr.indexOf(item, index+1) === -1 

}

let arr = [1, 2, 3, 4, 5, 2, 3, 4, 6, 76, 32, 8, 5, 5, 34, 32, 1, 32, 3];
arr.filter(filterHelper)

