// Persisted to file `persisted_todos.json` Todo API
const express = require('express')
const route = express.Router()
const fs = require('fs')

route.use(express.urlencoded({extended : true}))

// Helper function to Read to file 
const readTodos = (file, callback) => fs.readFile(file, 'utf-8', (err, data) => {
  if (err) return callback(err)
  data = JSON.parse(data) 
  return callback(null, data)
})

// Helper function to Write to file 
const writeTodos = (file, data, callback) => {
  fs.writeFile(file, JSON.stringify(data), (err) => {
    if (err) return callback(err)
    return callback(null)
  })
}

const file = './persisted_todos.json'
route.get('/', (req, res, next) => {
  readTodos(file, (err, todos) => {
      if (err) return res.send(500) // Server error
      res.send(todos)
  })
})

route.post('/', (req, res, next) => {
  const { title, striked = false } = req.body
  readTodos(file , (err, todos) => {
    todos.push({
      title,
      striked: striked === 'true'
    })
    writeTodos(file, todos, (err) => {
      if (err) return res.send(500) // Server Error
      res.send(todos[todos.length-1])
    })
  })
})

route.patch('/:id', (req, res, next) => {
  readTodos(file, (err, todos) => {
    if (err) return res.send(500)
    const toBeUpdatedTodo = todos[(+req.params.id) - 1] 
    toBeUpdatedTodo.title = req.body.title
    toBeUpdatedTodo.striked = req.body.striked === 'true'
    writeTodos(file, todos, (err) =>{
      if (err) return res.send(500)
      res.send(toBeUpdatedTodo)      
    })
  }) 
})

route.delete('/:id', (req, res, next) => {
  readTodos(file, (err, todos) => {
    if (err) return res.send(500)
    if (+req.params.id <= 0 || +req.params.id > todos.length || todos[+req.params.id - 1].striked === false) {
      return res.sendStatus(403) // forbidden status code
    }
    todos.splice(+req.params.id - 1, 1)
    writeTodos(file, todos, (err) => {
      if (err) return res.send(500)
      res.status(200)
      res.send('Deleted!')
    })
  })
})

module.exports = route
