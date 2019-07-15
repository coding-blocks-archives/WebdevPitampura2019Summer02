const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

let bands = [{
    id: 1,
    title: 'Nirvana',
    striked: false
}, {
    id: 2,
    title: 'Black Sabbath',
    striked: true
}]

app.get('/', (req, res) =>  {
    res.render('index', { bands })
})

app.post('/', (req, res) => {
    bands.push({
        id: bands.length + 1,
        title: req.body.title,
        striked: false
    })
    res.redirect('/')
})

app.post('/update/:id', (req, res) => {
    const band = bands.find(b => b.id == req.params.id)
    band.title = req.body.title
    band.striked = !(req.body.striked == "true")
    res.redirect('/')
})

app.post('/delete', (req, res) => {
    bands = bands
        .filter(b => !b.striked)
        .map((el, index) => ({ ...el, id: index + 1}))
    res.redirect('/')
})

app.listen(3000, function () {
    console.log("Listening on 30000")
})