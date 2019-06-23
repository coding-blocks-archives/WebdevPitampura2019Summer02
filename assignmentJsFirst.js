prompt("This program uses switch case to solve fibonacci, Prime-number and duplicates.Turn on console for output\nPress 'Enter' to begin!")
function fibo(n)
{
    if(n<0)
        return -1;
    var f=[n+2];
    var i;
   f[0]=0,f[1]=1;
    for(i=2;i<=n;i++)
        f[i]=f[i-1]+f[i-2];
    
    return f[n];
}
function primeNum(n)
{
	var prime=[n/2];
    for(let i=0;i<n/2;i++)
    	prime[i]=false;
    for (let i=3 ; i*i < n; i+=2) 
	{ 
		// If i is prime, mark all its 
		// multiples as composite 
		if (prime[i/2] == false) 
			for (let j=i*i; j<n; j+=i*2) 
				prime[j/2] = true; 
	} 
    	
    for (let i=3; i<n ; i+=2) 
   	 console.log(i)

}
function duplicates(arr,)
{
    var unique=new Set(arr);
    console.log(unique);
}

var x=Number(prompt("Enter choice : \n1)fibonacci \n2)Prime-number \n3)Remove duplicates "))
while(x!=4)
{
    switch(x)
    {
       case 1:
           var n=window.prompt("Enter a number");
           var ans=fibo(n);
            console.log(n,"th fibonacci is",ans);
           break;
        
       case 2:
           var y=window.prompt("Enter a number :");
           console.log("All the prime-numbers before ",y," are :");
           primeNum(y);
           break;

       case 3:
           var z=window.prompt("Enter size of the array :");
           var arr=[];
           while(z--)
           {
               arr[z]=prompt('Enter element'+(z+1));
           }
           console.log("The array without duplicates is now :");
           console.log(duplicates(arr));
           break;
        case 4:
            break;
   }
   x=Number(prompt("Enter the value of choice again: \n1)fibonacci \n2)Prime-number \n3)Remove duplicates"))
}