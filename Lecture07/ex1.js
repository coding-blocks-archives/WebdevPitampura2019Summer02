let obj = {
    a: 10,
    b: 20,
    c: "Some Text"
}

console.log(obj)

let obj2 = {
    a: "Some Text",
    fn: function() {
        return "fun"
    }
}

console.log(obj2)
console.log(obj2.fn)
console.log(obj2.fn())