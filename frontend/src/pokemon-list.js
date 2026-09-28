import {LitElement, html} from "lit";

class PokemonList extends LitElement {

    static properties = {
        pokemon: {type: Array}
    }

    constructor() {
        super();
        this.pokemon = [];
    }

    render() {
        return html`
            <ul>
                ${this.pokemon.map(pokemon => html`
                    <li><a href="/pokemon/${pokemon.name}">${pokemon.name}</li>`)}           
            </ul>
        `;
    }
}

customElements.define('pokemon-list', PokemonList);