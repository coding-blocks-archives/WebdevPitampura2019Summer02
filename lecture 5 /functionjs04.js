var z=3

//function f1()
//{
 //   var z=1
   // console.log(z)
//}
var f1=function(){
    var z=1;
    console.log(z)

}
console.log(f1);
var j=function f1(j){
for(i=0;i<j;i++)
{
    console.log(i);
}
}
f1(j)
function fibonacci(a,b,n){
   var  c=a+b;
    if(n>0){
  
   fibonacci(b,c,n-1);
    }
    
    console.log(c);
}
fibonacci(0,1,10);