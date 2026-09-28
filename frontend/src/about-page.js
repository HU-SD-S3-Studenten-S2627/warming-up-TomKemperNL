import {html, LitElement} from "lit";

class AboutPage extends LitElement {
    render(){
        return html`
            <h2>About</h2>
            <p>Blablablablabla</p>
        `
    }
}

customElements.define('about-page', AboutPage);