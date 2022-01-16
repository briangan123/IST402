import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 10px;
        background: lightgray;
        color: var(--hello-world-text-color, #000);
      }
      .planet {
        color: var (--planet-color, blue);
      }
    `;
  }

  static get properties() {
    return {
      greeting: { type: String },
      planet: { type: String },
    };
  }

  constructor() {
    super();
    this.greeting = 'Hello';
    this.planet = 'World';
  }

  render() {
    return html`
      <span @click=${this.togglePlanet} @keypress=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
  </span>
    `;
  }

  togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World';
  }
}
customElements.define('hello-world', HelloWorld);
