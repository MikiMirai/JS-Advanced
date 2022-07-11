function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', load);
    document.querySelector('#btnCreate').addEventListener('click', create);
}

let phoneBook = document.querySelector('#phonebook')
let uri = 'http://localhost:3030/jsonstore/messenger'

function create() {
    let name = document.querySelector('#person');
    let number = document.querySelector('#phone');

    if (!name.value || !number.value) {
        return;
    }

    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            person: name.value.trim(),
            phone: number.value.trim()
        })
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}
function load(){
    fetch(uri)
    .then(res => res.json())
    .then(data => {
        phoneBook.replaceChildren();

        Object.values(data).forEach(p => {
            let liElement = document.createElement('li');
            liElement.textContent = `${p.person}: ${p.phone}`;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.setAttribute('id', p._id);
            liElement.appendChild(buttonDelete);
            phoneBook.appendChild(liElement);
        })
    })
}
function remove(){
    let currentId = e.target.id;

    if (e.target.textContent == 'Delete') {
        fetch(`${uri}/${currentId}`, {
            method: 'DELETE'
        })
        .then(res => {
            load()
            return res.json()
        })
        .catch(err => alert(err.message))
    }
}

attachEvents();