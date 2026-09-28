import {LitElement, html} from "lit";
import {Router, Routes} from "@lit-labs/router";

class PokemonApp extends LitElement {
    router = new Router(this, [
        {path: '/', render: () => html`<h2>Dat Home Page</h2><p>blablabla</p>`},
        {path: '/about', render: () => html`<about-page></about-page>`},
        {path: '/pokemon', render: () => html`<h2>Pokemon!</h2><pokemon-container></pokemon-container>`},
        {path: '/pokemon/:name', render: ({name}) => html`<h2>${name}!</h2><pokemon-container requestedPokemon=${name}></pokemon-container>`},
    ]);


    onPokemonSelected(event) {
        console.log(event.detail.pokemon);
        console.log('routing to /pokemon/' + event.detail.pokemon)
        this.router.goto('/pokemon/' + event.detail.pokemon);
    }

    render() {
        return html`
            <h1>Pokemon-app </h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pokemon">Pokemon</a></li>
                </ul>
            </nav>
            <main @select-pokemon=${this.onPokemonSelected}>
                ${this.router.outlet()}
            </main>

        `
    }
}

customElements.define('pokemon-app', PokemonApp);