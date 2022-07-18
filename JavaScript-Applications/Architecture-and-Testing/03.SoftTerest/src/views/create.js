import {createIdea} from '../api/data.js'
let section = document.getElementById('createPage');
section.remove()

let form = section.querySelector('form')
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(section)
}

async function onSubmit(event){
    event.preventDeafult()

    let formData = new FormData(form);
    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let image = formData.get('imageURL').trim();

    let idea = {
        title,
        description,
        image
    };

    createIdea(idea)
    form.reset()
    ctx.goTo('catalog')
}