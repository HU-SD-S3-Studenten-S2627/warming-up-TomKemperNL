import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

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