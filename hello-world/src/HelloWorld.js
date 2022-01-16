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

  __increment() {
    this.counter += 5;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
