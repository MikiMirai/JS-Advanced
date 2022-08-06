import { html } from '../../node_modules/lit-html/lit-html.js';
import { editPostById, getPostById } from '../api/data.js';

const editTamplate = (post, onSubmit) => html`
<section id="edit-page" class="auth">
<form id="edit" @submit=${onSubmit}>
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" value="${post.title}">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" value="${post.description}">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" value="${post.address}">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" value="${post.phone}">
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>`

export async function editPage (ctx) {
    const postId = ctx.params.id;

    const post = await getPostById(postId);
    
    ctx.render(editTamplate(post, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const editPost = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            address: formData.get('address').trim(),
            phone: formData.get('phone').trim()
        }

        if (Object.values(editPost).some(x => !x)) {
            return alert('All fields are required!');
        }

        await editPostById(postId, editPost);
        event.target.reset();
        ctx.page.redirect(`/details/${postId}`);
    }
}