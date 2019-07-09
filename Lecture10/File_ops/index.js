const fs = require('fs')

fs.writeFile('./file.txt', 'Hello Node', (err) => {
    if (err)
        return console.log(err)
    
    console.log("Done")
})