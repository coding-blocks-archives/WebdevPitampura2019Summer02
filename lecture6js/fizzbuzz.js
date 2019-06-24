function fizzbu(){
    let start =new Date().getTime();
    var x=document.getElementById("input box").value;
   let list=document.getElementById("list");
   let str="";
     for(i=1;i<=x;i++)
{
    let item=document.createElement("li");
   

    if(i%3==0 && i%5==0){
        
        item.innerHTML="fizzbuzz";
            }
     else if(i%3==0)
    {
        item.innerHTML="fizz";
    }
    else if(i%5==0)
    {
        item.innerHTML="buzz";
    }
    
    else
    {
        item.innerHTML=i;
    }
    list.appendChild(item);
   
}
let end=new Date().getTime();
console.log(end-start);
}
