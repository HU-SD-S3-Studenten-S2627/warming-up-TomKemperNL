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

