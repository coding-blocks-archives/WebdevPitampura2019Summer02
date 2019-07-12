class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    isAdult() {
        if(this.age < 18)
        {
            return false;
        }
        else return true
     }
}

let p1 = new Person("Joe", 25);
console.log(p1.isAdult());