import { html, render } from './node_modules/lit-html/lit-html.js';
import { data } from './data.js';

const greetingTemplate = (name, count) => html`<h2>Hello there ${name}! Clicked ${count} times.</h2>`;

const articleTemplate = (article) => html`<article>
<h2>${article.title}</h2>
<div class="content">
    <p>
    ${article.content}
    </p>
</div>
<footer>Author: <span style="font-style: italic;">${article.author}</span></footer>
</article>`;

start();

function start(){
    document.getElementById('reloadBtn').addEventListener('click', onClick);

    const main =  document.querySelector('main');
    render(data.map(articleTemplate), main);
}

let count = 1;

function onClick(){
    const header = document.querySelector('header');
    const templateResult = greetingTemplate('Peter', count++);

    render(templateResult, header);
}