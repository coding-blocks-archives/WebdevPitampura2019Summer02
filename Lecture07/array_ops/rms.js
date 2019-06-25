let arr = [2, 3, 4]

let rmsValue = Math.sqrt(((arr.map(item => item*item))
    .reduce((acum, item) => {
        return acum+item
    })
    )/arr.length)


console.log(rmsValue)