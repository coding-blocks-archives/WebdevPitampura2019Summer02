

/*function f1(i)
{
    if(i===0)
    return;
    console.log(i);
    f1(i-1);
}
f1(10);
function f2(i)
{
    for(j=1;j<=i;j++)
    console.log(j);
}
f2(5);*/
function f3(n)
{
    var x=n;
    var r=2;
    while(x>0)
    {
        var flag=0;
        for(var i=2;i<=Math.sqrt(r);i++)
        {
            if(r%i==0)
            flag++;
        }
        if(flag==0)
        {
            console.log(r);
            x--;
        }
        r++;
    }
}
f3(10);