import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/Todolist'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      todoList :  [{
        id:1,
        name: 'task1'
      },
      {
        id:2,
        name: 'task2'
      },
      {
        id:3,
        name: 'task3'
      },
      {
        id:4,
        name: 'task4'
      },
      {
        id:5,
        name: 'task5'
      }
    ]
    };
  }

    handleInputChange = event =>{
      this.setState({
        todoList : [...this.state.todoList,
        {
          id: this.state.todoList.length+1,
          name: event.target.value
        }]
      })
    }

    handleSubmit = event =>{
      this.setState({
        todoList : [...this.state.todoList,
        {
          id: this.state.todoList.length+1,
          name: event.target.value
        }]
      })
    }
  
  render() {  
    return (
      <div className="App">
       <h1>ToDo List</h1>
       <div className="input-group input-group-sm mt-3 mb-3">
  <input type="text" className="form-control" aria-label="Sizing example input"
   aria-describedby="inputGroup-sizing-sm"
   style={{width: "60%"}}
  //  onChange={this.handleInputChange}
  />
  <button onClick={this.handleSubmit} type="submit">Add</button>
       </div>

       
       {this.state.todoList.map(item => (
          <ToDoList title={item.name}/>
        ))}
      </div>
    );
  }
}

export default App;
