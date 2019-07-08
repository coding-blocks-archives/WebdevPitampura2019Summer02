// const todoState = [
//     {
//         title: 'Radiohead',
//         striked: false
//     }
// ]

let todoState=[]

const render = (state) =>{
    return state.reduce((acc, todo, index)=>{
        const classString = todo.striked? 'class = "striked"': '';
        return acc + `<li ${classString} data-index=${index}> ${todo.title} </li>`
    },'')
}

const paint = function(){
    const html = render(todoState)
    document.getElementById('list').innerHTML=html;
}

document.getElementById("addButton").addEventListener('click',e=>{
    const inputText = document.getElementById("inputText").value;
    todoState.push({
        title: inputText,
        striked: false
    })
    document.getElementById("inputText").value="";
    paint();
})


// document.getElementById("list").addEventListener('click',e =>{
//         const index = e.target.dataset.index;
//         todoState[index].striked = !todoState[index].striked;
//         paint()
// })

// document.getElementById("bin").addEventListener('click',e=>{
//     todoState = todoState.filter(todo=> !todo.striked)

//     paint()
// })













//bubble, capture, stop propagation