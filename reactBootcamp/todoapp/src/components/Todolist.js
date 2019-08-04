import React from 'react'


class ToDoList extends React.Component{
    render(){
        return(
            <div>
                <li>{this.props.title}</li>
                {console.log(this)}
            </div>
        )
    }
}


export default ToDoList