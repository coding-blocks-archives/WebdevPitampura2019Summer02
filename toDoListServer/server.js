const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))
const todos = [{title: "task1", striked:false}]

app.get('/', (req, res) =>{
    res.send(todos)

})

app.post('/', (req,res) =>{
    const {title, striked=false} = req.body
    const newTodo = {
        id: todos.length+1,
        title,
        striked: striked == "true"
    }
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete('/:id' , (req, res)=>{
    const todoDelete = todos.find(todo => todo.id == req.params.id)
        if(!todoDelete.striked){
            return sed.sendStatus(403)
        }

        todos = todos.filter(todo => todo.id != todoDelete.id)
        res.sendStatus(200)
    }
)

app.patch('/:id' , (req,res) =>{
    const todo = todos.find(t => t.id == req,params.id)
    todo.striked = !!req.body.striked        // !! can be used to typecast string to boolean
     todo.title = req.body.title
    res.send(todo)
})



app.listen(3000, function(){
    console.log("Running on 3000")
})


//get -> read file from todos
//functions returning promise or callback
//gettodos() to retrieve todos
// writetodos() to post todos