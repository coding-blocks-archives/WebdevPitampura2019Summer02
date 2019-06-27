//  Goal : to find the max element of array using reduce()

// # reduce can take up to five elements with index ,arr and initValue being optional
function reduceHelper(acum, curr, currIndex ,arr){

    /* @param acum : stores the returned result from this function and remembers the value in it for next iteration :
      and  ultimately becomes the final, single resulting value.
    */ 

    /* Note : The first time the callback is called, accumulator and currentValue can be one of two values. 
    If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue,
    and currentValue will be equal to the first value in the array. If no initialValue is provided,
    then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
    */

    if (acum < curr) return curr
    else return acum
}


let arr = [1,2,3,1000,324,-4,65,-100,4,5,5,6];
let ans  = arr.reduce(reduceHelper,-99999); // passing init value here
console.log(ans);