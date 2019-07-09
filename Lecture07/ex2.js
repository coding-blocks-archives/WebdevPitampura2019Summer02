let obj = {
    a: 20,
    b: 30,
    sum: function() {
        return this.a + this.b
    }
}

function WhatIsThis() {
    console.log(this === global)
}

console.log(WhatIsThis())