import {LitElement, html} from "lit";
import {Router, Routes} from "@lit-labs/router";

class PokemonApp extends LitElement {
    router = new Router(this, [
        {path: '/', render: () => html`<pokemon-container></pokemon-container>`},
        {path: '/about', render: () => html`<about-page></about-page>`},
    ]);


    render() {
        return html`
            <h1>Pokemon-app </h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </nav>
            <main>
                ${this.router.outlet()}
            </main>

        `
    }
}

customElements.define('pokemon-app', PokemonApp);