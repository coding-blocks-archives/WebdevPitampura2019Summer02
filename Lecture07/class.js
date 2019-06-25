class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    isAdult(){
        if(this.age<18){
            return false
        }
        else return true;
    }
}

let p1 = new Person("qwerty", 20)


console.log(p1.isAdult())