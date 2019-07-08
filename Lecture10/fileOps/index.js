const fs = require('fs')  //present in Node's internal API, fs=> file systems

// fs.writeFile('./file.txt', 'Hello Node' , (err) =>{
//     if(err) 
//         return console.log(err)

//         console.log("Done")
// })

 fs.readFile('./input.txt','utf8', (err, contents) =>{
      if(err) 
             return console.log(err)

             
            const result = contents.split('\n')
            .filter(el=>!isNaN(el)).
            reduce((acc,val)=> acc + +val,0)  // binary and unary plus to convert string into integer for addition
            //can also use .map(el => +el) sss
             console.log(result)
             

             fs.writeFile('./output.txt', result, (err)=>{
                 if(err)
                 return console.log(err)

                 console.log("none")
             })
     } )
     