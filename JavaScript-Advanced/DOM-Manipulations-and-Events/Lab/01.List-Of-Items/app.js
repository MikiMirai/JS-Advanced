function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');

    liElement.textContent = input.value;

    document.getElementById('items').appendChild(liElement);

    input.value = '';
}