console.log('aaaaaa')

// let dataPromise = fetch('https://pokeapi.co/api/v2/pokemon');
// dataPromise.then(vanilleVla => vanilleVla.json()).then(data => {
//     updatePokemonList(data);
// })

let resp = await fetch('https://pokeapi.co/api/v2/pokemon');
let data = await resp.json();
updatePokemonList(data);


console.log('wat is er gereturned', data);

async function updatePokemonList(data){
    let ulletje = document.querySelector('#lijstjepokemon');

    for(let pokemon of data.results){
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.textContent = pokemon.name;

        li.appendChild(button);
        ulletje.appendChild(li);
    }
}

updatePokemonList(data);

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
const container = document.querySelector("#map");
let coordinates_HL15 = [52.08419050575246, 5.1756441593170175];
let zoomLevel = 17;
let map = L.map(container);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setView(coordinates_HL15, zoomLevel);