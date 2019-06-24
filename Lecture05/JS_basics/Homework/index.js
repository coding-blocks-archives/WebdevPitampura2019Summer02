function isprime(n) {
    for (let index = 2; index < n; index++) {
        if (n % index == 0)
            return false;
    }
    return true;
}

function printPrime(x) {
    if (x >= 2) {
        console.log(2);

        for (var i = 3; i <= x; i++) {
            if (isprime(i))
                console.log(i);
        }
    }
}

var info =[
    {id:1, name:'harsh'},
    {id:2, name:'harshh'},
    {id:3, name:'harshhh'},
    {id:6, name:'harshhhhhh'}
]

var infoID = info.map(function (info){
    return info.name;
})