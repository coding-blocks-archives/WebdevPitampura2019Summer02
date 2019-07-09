const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))

let bands = [{
    id: 1,
    title: 'Foo Fighters',
    striked: false
}, {
    id: 2,
    title: 'Creed',
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
    // const bandDeleted = bands.find(b => b.id == req.params.id)
    // if (!bandDeleted.striked) {
    //     res.redirect('/')
    // }

    // bands = bands.filter(band => band.id != bandDeleted.id)

    bands = bands
            .filter(b => !b.striked)
            .map((el, index) => ({...el, id: index+1}))

    res.redirect('/')
})




app.listen(3000, function () {
    console.log("Listening on 3000")
})