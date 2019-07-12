 let food = {
//     veg: true,
//     taste: "delicious"
 }

let fruit = Object.create(food)
fruit.taste = "sweet";

let Mango = Object.create(fruit)
Mango.color = "Yellow"


console.log(Mango)