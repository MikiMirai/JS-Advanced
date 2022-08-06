import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteGameById, getGameById } from '../api/data.js';

const detailsTemplate = (game, isOwner, onDelete, isLoggedIn) => html`
<section id="game-details">
<h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            ${isOwner && isLoggedIn ? html`
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a href="#" class="button" @click=${onDelete}>Delete</a>
            ` : ''}
        </div>
    </div>

</section>`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
    const user = ctx.user;

    let userId;

    if (user != null) {
        userId = user._id
    }

    const isOwner = user && game._ownerId == user._id;
    const isLoggedIn = user !== undefined;

    ctx.render(detailsTemplate(game, isOwner, onDelete, isLoggedIn));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteGameById(gameId);
            ctx.page.redirect('/');
        }
    }
}