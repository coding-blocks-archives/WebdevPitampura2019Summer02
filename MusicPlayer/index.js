const express = require('express')
const app = express()
const { getTracks, insertTrack } = require('./database')



app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  const { id } = req.query
  getTracks().then(tracks => { 
    const selectedTrack = tracks.find(t => t._id == id)
    res.render('index', { tracks, selectedTrack })
  })
})





app.get('/add', (req, res) =>{
    res.render('add')
})



app.post('/add', (req, res) =>{
    const newTrack = req.body
    insertTrack(newTrack).then(result =>{
        console.log(result)
        res.redirect('/?id=' + result.ops[0]._id)
    })
})
app.listen(4000, function(){
    console.log("running at 4000")
})