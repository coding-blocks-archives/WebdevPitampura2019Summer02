var arr=[9,8,7,1,4,6,4,7,7,2]

console.info("origional array ")
console.info(arr);
let prevnum=true

arr.sort();
// f1(arr);
let f1=arr.filter(function(item){

if(prevnum===true){
    prevnum=item;
    return true;
}else if(prevnum===item){
    prevnum=item;
return false
}else{
    prevnum=item;
    return true;
} 
})

console.info(" array after removing duplicasy ");
console.info(f1);
// }
// // var y =;
// f1([9,8,7,1,4,6,4,7,7,2])
// console.log("hi");
