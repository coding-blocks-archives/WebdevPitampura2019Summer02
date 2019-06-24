var n;
var s=2;
var i=0;

function check(s){
    for(var j=2;j<s;j++){
        if(s%j==0){
            return false;
        }
    }
    return true;
}
function prime(n){
    while(i<n){
        if(check(s)){
            console.log(s);
            i++,s++;
        }
        else{
            s++;
            continue;
        }
    }
}

prime(10);