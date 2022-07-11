document.getElementById('refreshBtn').addEventListener('click', getData);
document.getElementById('createBtn').addEventListener('click', postData);

async function getData() {
    const response = await fetch('http://localhost:3030/jsonstore/demo');
    const data = await response.json();
}

async function postData(){
    const product = document.getElementById('product').value;

    const data = {
        name: product
    };

    const respone = await fetch('http://localhost:3030/jsonstore/demo', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const responeData = await respone.json();
}