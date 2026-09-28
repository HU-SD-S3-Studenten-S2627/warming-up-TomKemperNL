import {LitElement, html, css} from "lit";
import {PokemonService} from "./pokemon-service.js";

export const COORDINATES_HL15 = [52.08419050575246, 5.1756441593170175];

class PokemonContainer extends LitElement{

    service = new PokemonService();

    static properties = {
        pokemon: {type: Array},
        selectedPokemon: {type: Object}
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: row;
            }
        `
    ];

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
        <pokemon-map 
                .pokemon=${this.pokemon}
                .coordinates=${this.selectedPokemon ? this.selectedPokemon.coordinates : COORDINATES_HL15}
                @select-pokemon=${this.pokemonSelected}></pokemon-map>
        <pokemon-details .pokemon=${this.selectedPokemon}></pokemon-details>`;
    }
}

customElements.define('pokemon-container', PokemonContainer);