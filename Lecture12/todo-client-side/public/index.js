// const bandsState = [{
//     title: 'Radiohead',
//     striked: false
// }, {
//     title: 'Porcupine Tree',
//     striked: true
// }]

let bandsState = []

const fetchFromServer = () => {
    fetch('api/todos')
        .then(response => response.json())
        .then(data => {
            bandsState = data
            paint()
        })
}


fetchFromServer()


const render = (state) => {
    return state.reduce((acc, todo, index) => {
        const classString = todo.striked ? 'class = "striked"': ''
        return acc + `<li ${classString} data-index="${index}" > ${todo.title} </li>`
    }, '')
}

const paint = function () {
    const html = render(bandsState)
    document.getElementById('list').innerHTML = html
}

document.getElementById("addButton").addEventListener('click', e => {
    const inputText = document.getElementById('inputBox').value
    fetch('api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: inputText})
    }).then(response => response.json())
    .then(newBand => bandsState.push(newBand))
    .then(paint)

    // bandsState.push({
    //     title: inputText,
    //     striked: false
    // })
    // paint()
})

document.getElementById('list').addEventListener('click', e => {
    const index = e.target.dataset.index
    bandsState[index].striked = !bandsState[index].striked

    fetch('api/todos/' + bandsState[index].id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bandsState[index])
    })
    .then(response => response.json())
    .then(data => bandsState[index]=data)
    .then(paint)

})

document.getElementById('clearButton').addEventListener('click', e => {
    const bandsToDelete = bandsState.filter(band => band.striked)
    const deletePromises = bandsToDelete.map(band => {
        return fetch('/api/todos/' + band.id, {
            method: 'DELETE'
        })
    })

    Promise.all(deletePromises).then(fetchFromServer)
    // paint()
})