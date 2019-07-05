const contactsState = []


function renderContacts (state) {
    return state.map((contact, index) => {
        return contact.editMode ? `
            <div class="contact-card-editor">
                Name: <input name="name" type="text" value="${contact.name}"> <br>
                Phone:  <input name="phone" type="text" value="${contact.phone}"> <br>
                Photo   <input name="photo" type="text" value="${contact.photo}"> <br>
                
                <button data-action="save" data-index="${index}"> Save </button>
            </div>
        ` : `
            <div class="contact-card">
                <p> Name: ${contact.name} </p> 
                <p> Phone: ${contact.phone} </p> 
                <p> Photo: ${contact.photo} </p> 

                <button data-action="delete" data-index="${index}"> Delete </button>
                <button data-action="edit" data-index="${index}"> Edit </button>
            </div>
        `
    }).reduce((acc, val) => acc + val, '')
}

function paintContacts () {
    document.getElementById('contacts').innerHTML = renderContacts(contactsState)
}

// paintContacts()

function addContact (e) {
    const inputElements = [...document.querySelectorAll('#contact-editor > input')]
    const inputs = reduceStateFromInputElements(inputElements)
    contactsState.push(inputs)
    paintContacts()
}

const reduceStateFromInputElements = inputElements =>
    inputElements.reduce((acc, val) => ({
        ...acc,
        [val.name]: [val.value]
    }), {})



document.getElementById('contacts').addEventListener('click', e => {
    // const {index, action} = e.target.dataset
    const index = e.target.dataset.index
    const action = e.target.dataset.action

    // console.log(action, index)

    if  (!action) {
        return ;
    }

    switch (action) {
        case 'delete': 
            contactsState.splice(index, 1)
            break
        case 'edit':
            contactsState[index].editMode = true
            break;
        case 'save':
            const inputNodes = [...e.target.parentNode.querySelectorAll('input')]
            const contactState = reduceStateFromInputElements(inputNodes)
            contactsState[index] = contactState
            break;
    }

    paintContacts()
})