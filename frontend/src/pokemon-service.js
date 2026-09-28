export class PokemonService {
    async getPokemonList() {
        let response = await fetch('/api/pokemon').then(response => response.json());
        return response;
    }

    async getPokemon(name) {
        let response = await fetch('/api/pokemon/' + name).then(response => response.json());
        return response;
    }
}
