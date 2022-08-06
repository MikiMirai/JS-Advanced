import { html } from '../../node_modules/lit-html/lit-html.js';

import { login, register } from '../api/api.js';

const loginTamplate = (onSubmit) => html`<section id="login-page" class="auth">
<form id="login" @submit=${onSubmit}>

    <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password">
        <input type="submit" class="btn submit" value="Login">
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </div>
</form>
</section>`

export async function loginPage(ctx) {
    ctx.render(loginTamplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!password || !email) {
            return alert('All fields are required!');
        }

        await login(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/')
    }
}

const registerTamplate = (onSubmit) => html`
<section id="register-page" class="content auth">
<form id="register" @submit=${onSubmit}>
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </div>
</form>
</section>`

export async function registerPage(ctx) {
    ctx.render(registerTamplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPass = formData.get('confirm-password');

        if (!password || !email) {
            return alert('All fields are required!');
        } else if (password != repeatPass) {
            return alert('Password don\'t match')
        }

        await register(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}
