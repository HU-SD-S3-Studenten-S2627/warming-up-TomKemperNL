import {Pokemap} from './pokemap.js'
import {PokemonService} from "./pokemon-service.js";

export const COORDINATES_HL15 = [52.08419050575246, 5.1756441593170175];

const container = document.querySelector("#map");
let map = new Pokemap(container, COORDINATES_HL15);
map.render();

let pokemonList = await new PokemonService().getPokemonList();
for(let pokemon of pokemonList){
    map.add(pokemon);
}
