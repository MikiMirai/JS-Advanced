import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllGames } from '../api/data.js';

const catalogueTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
        ${games.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : 
        games.map(g => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src="${g.imageUrl}">
                <h6>${g.category}</h6>
                <h2>${g.title}</h2>
                <a href="/details/${g._id}" class="details-button">Details</a>
            </div>
        </div>`)}
    </div>
</section>`;

export async function cataloguePage(ctx) {
    const gamesList = await getAllGames();
    ctx.render(catalogueTemplate(gamesList))
}