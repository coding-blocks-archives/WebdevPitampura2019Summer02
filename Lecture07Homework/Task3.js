let cars = ["suzuki", "hyundai", "honda", "jeep",  "audi","bmw", "nissan"]
console.log(cars)

var min = 100;
var minword = ""
function minString(item){
    temp = item.toString() 
    if(temp.length<min){
        min = temp.length;
        minword = temp;
    }
}

cars.forEach(minString);

console.log(min);
console.log(minword)