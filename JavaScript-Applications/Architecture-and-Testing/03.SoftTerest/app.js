import './src/api/api.js'
import { showCatalog } from './src/views/catalog.js';
import { showHome } from './src/views/home.js'
import { showCatalog } from './src/views/catalog'
import { showLogin } from './src/views/login'
import { showRegister } from './src/views/register'
import { showCreate } from './src/views/create'
import { showDetails } from './src/views/details.js';
import {logout} from './src/api/data.js'
let main = document.querySelector('main');

let links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create',
    'catalogLink': 'catalog',
}

let views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails
}

let nav = document.querySelector('nav')
nav.addEventListener('click', onNavigation);

document.getElementById('logoutBtn').addEventListener('click', async (e) =>{
    e.preventDefault()
    await logout()
    updateNav()
    goTo('home')
})

function onNavigation(event) {
    event.preventDefault();
    let name = links[event.target.id];
    goTo(name);
}

function goTo(name, ...params) {
    let view = views[name]
    view(ctx, ...params)
}

let ctx = {
    showSection,
    updateNav,
    goTo
}

function showSection(name) {
    main.replaceChildren(name)
}

updateNav()

function updateNav(){
    let userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'none');
    } else{
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'block');
    }
}