function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        window.alert(" this is not a prime number")
         }
    }
    window.alert("this is prime number");
  }
}

console.log(test_prime(2));
