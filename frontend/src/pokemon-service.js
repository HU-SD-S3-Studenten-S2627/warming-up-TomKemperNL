import {COORDINATES_HL15} from "./pokemon.js";

export class PokemonService {
    async getPokemonList() {
        let response = await fetch('/api/pokemon').then(response => response.json());
        return response;
    }
}
