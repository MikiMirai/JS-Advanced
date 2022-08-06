import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePostById, getPostById} from '../api/data.js';

const detailsTamplate = (post, isOwner, onDelete) => html`<section id="details-page">
<h1 class="title">Post Details</h1>

<div id="container">
    <div id="details">
        <div class="image-wrapper">
            <img src="${post.imageUrl}" alt="Material Image" class="post-image">
        </div>
        
        <div class="info">
            <h2 class="title post-title">${post.title}</h2>
            <p class="post-description">Description: ${post.description}</p>
            <p class="post-address">Address: ${post.address}</p>
            <p class="post-number">Phone number: ${post.phone}</p>
            <p class="donate-Item">Donate Materials: 0</p>
        </div>
            
        <div class="btns">
            ${isOwner ? html`
                <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>`
                 : ''}
        </div>
    </div>
</div>
</section>`;

export async function detailsPage(ctx) {
    const postId = ctx.params.id;
    const post = await getPostById(postId);
    const user = ctx.user;

    const isOwner = user && post._ownerId == user._id;
    const isLoggedIn = user !== undefined;

    ctx.render(detailsTamplate(post, isOwner, onDelete, isLoggedIn));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deletePostById(postId);
            ctx.page.redirect('/');
        }
    }
}