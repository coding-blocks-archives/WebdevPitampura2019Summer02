function Person(Name, Age) {
    this.name = Name;
    // this.Age = Age;
    this.isAdult = function() {
        if(this.Age > 18) return true;
        else return false;
    }
    this.isAdult = function() {
        if(this.Age > 18) return true;
        else return false;
    }
}

let p1 = new Person("Dhruv", 16)
let p2 = new Person("Joe", 30);

let p3 = Person("John", 17)

console.log(p1.isAdult())
console.log(p2.Age)
console.log(p2.name)
// console.log(p3)