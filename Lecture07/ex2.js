let obj = {
    a:20,
    b:30,
    sum: function(){
        return this.a + this.b
    }
}


console.log(obj.sum())


function WhatIsThis(){
    console.log(this)
}

WhatIsThis()