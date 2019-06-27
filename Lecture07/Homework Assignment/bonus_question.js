//  Goal : to implement map() filter() forEach() using reduce()
// Hint: reduce return acum-> which can be an array

// =================================================map()=================================
function reduced_map(arr,func_to_apply){
    
    function helper(acum, curr){
        acum.push(func_to_apply(curr))
        return acum
    }
    // ths [] is passed to acum as it is intivalue, and we will fill it ,because hey need map!!
    return arr.reduce(helper,[])
}

let arr = [1,2,3,4,5,6,7,8]
function func_to_apply(value){
    // can implement any function let say square for now
    return value*value
}
console.log("Inital Array : ", arr)
console.log("Mapped to Square: ",reduced_map(arr,func_to_apply))

// =================================================filter()=================================
function reduced_filter(arr,func_to_apply){
    
    function helper(acum, curr){
        if (func_to_apply(curr)){
            acum.push(curr)
        }
        return acum
    }
    // ths [] is passed to acum as it is intivalue, and we will fill it ,because hey need map!!
    return arr.reduce(helper,[])
}

function func(value){
    // can implement any function let say true if even else false
    return value%2 == 0
}

console.log("Filtered for evens: ",reduced_filter(arr,func))

// =================================================forEach()=================================
// Hint: reduce return acum-> which can be an array
function reduced_forEach(arr,func_to_apply){
    
    function helper(acum, curr){
        func_to_apply(curr)
        return acum
    }
    // this "" is passed to acum as it is intivalue, and we will fill it ,because hey need map!!
    return arr.reduce(helper,"Done!")
}

function func2(value){
    // can implement any function let say true if even else false
    console.log("reduced_foreach Output :", value)
}
console.log("ForEach printing : ", "Start!")
console.log("ForEach printing : ", reduced_forEach(arr,func2))
// ==================================================================================