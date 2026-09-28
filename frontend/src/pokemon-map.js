import {LitElement, html, unsafeCSS, css} from "lit";
import L from 'leaflet'
import leafletCss from 'leaflet/dist/leaflet.css?inline'
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

class PokemonMap extends LitElement {

    static properties = {
        pokemon: {type: Array},
        zoomLevel: {type: Number},
        coordinates: {type: Array}
    }

    static styles = [
        css`
            #map {
                height: 500px;
                width: 500px;
            }
        `,
        unsafeCSS(leafletCss)];

    constructor() {
        super();
        this.pokemon = [];
        this.zoomLevel = 17;
        this.coordinates = [];
        this.markers = [];
    }

    #addMarker(pokemon) {
        console.log(pokemon);
        let marker = L.marker(pokemon.coordinates).addTo(this.map);
        this.markers.push(marker);
        marker.addEventListener('click', () =>
            this.dispatchEvent(new CustomEvent('select-pokemon', {
                detail: {pokemon: pokemon.name},
                bubbles: true,
                composed: true
            })));
    }

    updated(changedProperties) {
        if (changedProperties.has('pokemon')) {
            this.markers.forEach(marker => marker.remove());
            this.markers = [];
            this.pokemon.forEach(pokemon => this.#addMarker(pokemon));
        }
        if (changedProperties.has('coordinates') || changedProperties.has('zoomLevel')) {
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
        console.log('disconnected map');
        if (this.map) {
            console.log('removing map');
            this.map.remove();
        }
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