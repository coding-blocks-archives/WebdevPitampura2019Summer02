let cardState = []

const render = (state) => {
    return state.reduce((acc, card, index)=>{
        return acc+ `<li data-index=${index}><div id="card">Name: ${card.cname}<br>
                          Mobile: ${card.cphone}<br>
                          Roll No: ${card.croll}<br>
                          <button id="bin">Delete</button>
                          <button id="edit">Edit</button>
                          </div> </li>`
    }, '')
}

const paint = function(){
        const html = render(cardState)
        document.getElementById('container').innerHTML = html;
}


document.getElementById('addButton').addEventListener('click', e=>{
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const roll = document.getElementById('roll').value;
    cardState.push({
        cname: name,
        cphone: phone,
        croll: roll,
        editView: false,
        deleteCard: false
    })

    console.log(cardState)
    document.getElementById('name').value ="";
    document.getElementById('phone').value ="";
    document.getElementById('roll').value ="";
    paint();
})

