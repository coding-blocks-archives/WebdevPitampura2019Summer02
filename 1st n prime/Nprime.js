var n=prompt("Enter n");
var output="";

NPrime(n);

function isPrime(k){
    if(k<2) return false;
    if(k===2) return true;
    if(k%2===0) return false;
    for(j=3;j*j<=k;j+=2){
        if(k%j===0) return false;
    }
    return true;
}

function NPrime(n){
    cnt=0; i=2;
    while(cnt<n){
        if(isPrime(i)){
            //console.log(i);
            output+=i +" ";
            cnt++;
        }
        i++;
    }
    console.log(output);
}