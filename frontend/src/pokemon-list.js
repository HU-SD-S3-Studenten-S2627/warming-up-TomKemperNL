import {LitElement, html} from "lit";

class PokemonList extends LitElement {

    static properties = {
        pokemon: {type: Array}
    }

    constructor() {
        super();
        this.pokemon = [];
    }

    selectPokemon(name) {
        return e => {
            this.dispatchEvent(new CustomEvent('select-pokemon', {detail: {pokemon: name}}));
        }
    }

    render() {
        return html`
            <ul>
                ${this.pokemon.map(pokemon => html`<li @click=${this.selectPokemon(pokemon.name)}>${pokemon.name}</li>`)}           
            </ul>
        `;
    }
}

customElements.define('pokemon-list', PokemonList);