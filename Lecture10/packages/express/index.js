const express = require('express')
const app = express()
const fs = require('fs')

fs.readFile('./index.html','utf8', (err, contents) =>{
    if(err) 
           return console.log(err)

           app.get('/index.html', function (req, res) {
            res.send(contents)
            console.log("test")
          })
           
          app.listen(3000)
         
   } )



// fs.readFile('./y.html','utf8', (err, contents) =>{
//     if(err) 
//            return console.log(err)

//            app.get('/y.html', function (req, res) {
//             res.send(contents)
//             console.log("test")
//           })
           
//           app.listen(3000)
         
//    } )
