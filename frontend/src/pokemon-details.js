import {html, LitElement} from "lit";

class PokemonDetails extends LitElement{

    static properties = {
        pokemon: {type: Object}
    }

    constructor() {
        super();
        this.pokemon = null;
    }


    render() {
        if(this.pokemon == null) return html``;

        return html`
            <h3>${this.pokemon.name}</h3>
            <img src=${this.pokemon.imgUrl} alt=${this.pokemon.name}></img>
            <p>${this.pokemon.attack} / ${this.pokemon.defense}</p>
        `
    }
}

customElements.define('pokemon-details', PokemonDetails);
