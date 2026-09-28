import {LitElement, html, css} from "lit";
import {PokemonService} from "./pokemon-service.js";

export const COORDINATES_HL15 = [52.08419050575246, 5.1756441593170175];

class PokemonContainer extends LitElement{

    service = new PokemonService();

    static properties = {
        pokemon: {type: Array},
        selectedPokemon: {type: Object},
        requestedPokemon: {type: String}
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

    connectedCallback() {
        super.connectedCallback();
        console.log('connected container');
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnected container');
    }

    firstUpdated(_changedProperties) {
        //of de connectedCallback, da's altijd gedoe
        console.log('first updated container');
        this.service.getPokemonList().then(pokemon => {
            this.pokemon = pokemon;
            if(this.requestedPokemon) this.#selectPokemon(this.requestedPokemon);
        });
    }

    updated(changedProperties) {
        if(changedProperties.has('requestedPokemon')) {
            this.#selectPokemon(this.requestedPokemon);
        }
    }

    #selectPokemon(name){
        this.service.getPokemon(name).then(pokemon => this.selectedPokemon = pokemon);
    }

    pokemonSelected(event) {
        this.#selectPokemon(event.detail.pokemon);
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