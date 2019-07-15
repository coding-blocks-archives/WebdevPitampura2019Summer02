const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')

let todos = []

app.get('/', (req, res) => {
    res.render('index', { todos })
})

app.post('/', (req, res) => {
    todos.push({
        id: todos.length + 1,
        title: req.body.title,
        striked: false
    })
    res.redirect('/')
})


app.post('/update/:id', (req, res) => {
    const todo = todos.find(t => t.id == req.params.id)
    todo.title = req.body.title;
    todo.striked = !(req.body.striked == "true")

    res.redirect('/')
})

app.post('/delete', (req, res) => {
    todos = todos
            .filter(t => !t.striked)
            .map((el, index) => ({...el, id: index+1}))
            res.redirect('/')
})
app.listen(3000, function () {
    console.log('Listening at 3000')
})