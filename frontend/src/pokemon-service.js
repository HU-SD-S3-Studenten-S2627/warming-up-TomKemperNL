import {COORDINATES_HL15} from "./pokemon.js";

export class PokemonService {
    async getPokemonList() {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json());
        for(let pokemon of response.results){
            pokemon.coordinates = randomCoordinate(pokemon.location_area_encounters);
        }
        return response.results;
    }
}

function randomCoordinate(){
    let [lat,long] = COORDINATES_HL15;
    let randomLat = lat + ((Math.random() - 0.5) * 0.01);
    let randomLong = long + ((Math.random() - 0.5) * 0.01);
    return [randomLat, randomLong];
}