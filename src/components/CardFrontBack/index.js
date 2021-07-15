import CardGame from "../CardGame";

function CardFrontBack() {
    return/*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('md-Ouro', 'Medalha Ouro')}
        </article>
    `
}

export default CardFrontBack;