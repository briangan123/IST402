import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
// this method returns the specified style of the component and changes the appearance.
static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  // this method defines variables/compenents.
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

    // this is a constructor, so when this class is called, this is the baseline code that is being run.
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

    // This method increments the counter variable by 5.
  __increment() {
    this.counter += 5;
  }

    /* this method prints the heading and counter onto the website. It also listens for an event, 
    which in this case, is a button click. After the button named "increment by 5" is pressed, it calls the increment method. */
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment by 5</button>
    `;

  }
}
