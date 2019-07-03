const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) 
        return console.log(err)
    
    const result = data.split('\n')
        .filter(el => !isNaN(el))
        .map(el => +el)
        .reduce((acc, val) => acc + val, 0)

    fs.writeFile('./output.txt', result, (err) => {
        if (err)
            return console.log(err)

        console.log("Done")
    })
})


