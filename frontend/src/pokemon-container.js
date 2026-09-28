import { LitElement, html } from "lit";
import {PokemonService} from "./pokemon-service.js";

class PokemonContainer extends LitElement{

    service = new PokemonService();

    static properties = {
        pokemon: {type: Array},
        selectedPokemon: {type: Object}
    }

    constructor() {
        super();
        this.pokemon = [];
        this.selectedPokemon = null;
    }

    firstUpdated(_changedProperties) {
        //of de connectedCallback, da's altijd gedoe
        this.service.getPokemonList().then(pokemon => this.pokemon = pokemon);
    }

    pokemonSelected(event) {
        this.service.getPokemon(event.detail.pokemon).then(pokemon => this.selectedPokemon = pokemon);
    }

    render() {
        return html`
        <pokemon-list .pokemon=${this.pokemon} @select-pokemon=${this.pokemonSelected}></pokemon-list>
        <pokemon-map @select-pokemon=${this.pokemonSelected}></pokemon-map>
        <pokemon-details .pokemon=${this.selectedPokemon}></pokemon-details>`;
    }
}

customElements.define('pokemon-container', PokemonContainer);