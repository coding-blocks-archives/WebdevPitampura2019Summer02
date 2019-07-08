const express = require('express')
const route = express.Router()

let todos = []

route.get('/', (req, res) => {
    res.send(todos)
})

route.post('/', (req, res) => {
    const { title, striked = false } = req.body
    const newTodo = {
        id: todos.length + 1,
        title, 
        striked: striked == "true"
    }
    todos.push(newTodo)
    res.send(newTodo)
})

route.delete('/:id', (req, res) => {
    const todoToDelete = todos.find(todo => todo.id == req.params.id)
    if (!todoToDelete.striked) {
        return res.sendStatus(403)
    }

    todos = todos.filter(todo => todo.id != todoToDelete.id)
    res.sendStatus(200)
})

route.patch('/:id', (req, res) => {
    let todo = todos.find(t => t.id == req.params.id)
    todo.striked = !!req.body.striked
    todo.title = req.body.title
    res.send(todo)
})


module.exports = route