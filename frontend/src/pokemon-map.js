import {LitElement, html} from "lit";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const COORDINATES_HL15 = [52.08419050575246, 5.1756441593170175];

class PokemonMap extends LitElement {

    static properties = {
        pokemon: {type: Array},
        zoomLevel: {type: Number},
        coordinates: {type: Array}
    }

    constructor() {
        super();
        this.pokemon = [];
        this.zoomLevel = 17;
        this.coordinates = COORDINATES_HL15;
        this.markers = [];
    }

    #addMarker(pokemon) {
        let marker = L.marker(pokemon.coordinates).addTo(this.map);
        this.markers.push(marker);
        marker.addEventListener('click', () => this.dispatchEvent(new CustomEvent('select-pokemon', {detail: {pokemon: pokemon.name}})));
    }

    updated(changedProperties) {
        if(changedProperties.has('pokemon')) {
            this.markers.forEach(marker => marker.remove());
            this.markers = [];
            this.pokemon.forEach(pokemon => L.marker(pokemon.coordinates).addTo(this.map));
        }
        if(changedProperties.has('coordinates') || changedProperties.has('zoomLevel')) {
            this.map.setView(this.coordinates, this.zoomLevel);
        }

    }

    firstUpdated(_changedProperties) {
        const container = this.shadowRoot.getElementById('map');
        console.log(container);
        this.map = L.map(container);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if(this.map) this.map.remove();
    }

    render() {
        console.log('render')
        return html`
        <div id="map"></div>`;
    }
}

customElements.define('pokemon-map', PokemonMap);


/*

export class Pokemap {
    constructor(element, coordinates){
        this.element = element;
        this.coordinates = coordinates;

        this.map = L.map(this.element);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    zoomLevel = 17;

    render(){
        this.map.setView(this.coordinates, this.zoomLevel);
    }

    add(pokemon){
        L.marker(pokemon.coordinates).addTo(this.map);
    }
}
 */