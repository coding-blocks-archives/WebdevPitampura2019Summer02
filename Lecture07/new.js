function person(Name,Age){
    this.Name = Name;
    this.Age= Age;
    this.isAdult = function(){
        if(this.Age>18) return true;
        else return false;
    }
}

let p1 = new person("Harsh", 19)

let p2 = new person("Harshhh", 13)
console.log(p1)
console.log(p2.isAdult())