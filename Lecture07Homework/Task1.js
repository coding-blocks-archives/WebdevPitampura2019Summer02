let cars = ["suzuki", "hyundai", "honda", "suzuki", "jeep", "honda", "audi", "honda","bmw"]



arr1 = cars.filter(function(item, pos) {
        return cars.indexOf(item) == pos;
    })
    console.log(cars)
    console.log(arr1)