import {register} from '../api/data.js'
let section = document.getElementById('registerPage');
section.remove()

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section)
}

let form = section.querySelector('form')
form.addEventListener('click', onSubmit)

async function onSubmit(event){
    event.preventDeafult()

    let formData = new FormData(form);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repeatPass = formData.get('repeatPassword').trim();

    if (!email || password) {
        return alert('All fields are required!');
    }

    if (password != repeatPass) {
        return alert('Passwords dont match!');
    }

    await register(email, password);
    form.reset();
    ctx.goTo('home');
    ctx.updateNav();
}