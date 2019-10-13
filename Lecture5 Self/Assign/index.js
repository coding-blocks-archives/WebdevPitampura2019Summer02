function isprime(low,high){
    for(z=low; z<=high;z++){
        var count=0;
       
       for (i=2;i<= z/2; i++){
           if (z%i == 0){
               count ++;
               break;
           }
       }
       if (count==0){
           console.log(z);
       }
    }
}
console.log("Prime numbers:");
isprime(11,20);

console.log("Prime numbers between 0 - 20:");
isprime(0,20);