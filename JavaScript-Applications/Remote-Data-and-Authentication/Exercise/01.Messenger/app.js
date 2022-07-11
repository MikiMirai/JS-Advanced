function attachEvents() {
    document.querySelector('#refresh').addEventListener('click', displayComments);
    document.querySelector('#submit').addEventListener('click', addComent);
}

let uri = 'http://localhost:3030/jsonstore/messenger'

function addComent() {
    let authorName = document.querySelector('[name="author"]');
    let content = document.querySelector('[name="content"]');

    if (!authorName.value || !content.value) {
        return
    }

    fetch(uri, {
        method: 'POST',
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: content.value.trim()
        })
    })
    .then(res => {
        if (res.ok == false) {
            throw new Error('Error creating new message')
        }
        return res.json()
    })
    .catch(err => alert(err));

    authorName.value = '';
    content.value = '';
}

function displayComments() {
    fetch(uri)
    .then(res => {
        if (res.ok == false) {
            throw new Error('Error')
        }
        return res.json()

    })
    .then(data => {
        let textArea = document.querySelector('#messages');
        let comments = []
        Object.values(data).forEach(u => comments.push(`${u.author}: ${u.content}`));
        textArea.value = comments.join('\n');
    })
    .catch(err => alert(err.message))
}

attachEvents();