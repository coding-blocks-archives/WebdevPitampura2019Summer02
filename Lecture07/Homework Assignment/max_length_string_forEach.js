//  Goal : return max length string from array using forEach


let dog_breed = ["BullDog", "Labrador", "Poodle" ,"Pug", "Beagle", "German Shephard"]

let max_length = -1
let max_length_string = ""
function helper(item){
    if (item.length > max_length){
        max_length = item.length
        max_length_string = item
    } 
}

dog_breed.forEach(helper);
console.log(max_length_string," with length: " , max_length )