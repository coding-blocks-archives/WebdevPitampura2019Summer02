function counter(init,delta)
{
    var x=5;
    return function count()
    {
        init+=delta;
        console.log(x);
        console.log(init);
        console.log(delta);
    }
}
let c1=counter(1,3);
let c2=counter(2,5);
console.log(c1);
c1();
