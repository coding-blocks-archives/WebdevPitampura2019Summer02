var y=40;
function f1(i)
{
    for(var z=2;z<=i;z++){
        var bool=false;
     for(var j=2;j<=z/2;j++)
     {
            if(z%j==0)            
     {
         bool=true;
         break;       

     }
     
        }
        if(bool===false)
        {
            console.log(z);
        }
    }

}
f1(y)