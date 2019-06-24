
function removeduplicates(arr1){
 var arr2=[];
 for(var i=0;i<arr1.length;i++){
     if(arr2.indexOf(arr1[i])===(-1)){
         arr2.push(arr1[i]);
     }
 }
 return arr2;
}

var arr1=[1,2,3,4,1,2,3,2,2];
var arr2=removeduplicates(arr1);
console.log(arr2);