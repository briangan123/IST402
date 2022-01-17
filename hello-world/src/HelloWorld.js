import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {

// this method returns the specified style of the component
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
    super(); // I am guessing this class must be a child of a parent class. This method automatically retrieves and sets variables for this class that are defined in the parent class.
    this.title = 'Hey there'; // sets the title variable to "Hey there".
    this.counter = 5; // sets the counter variable to 5.
  }

  // This method increments the counter variable that will be displayed.
  __increment() {
    this.counter += 1;
  }

  // this method prints the heading and counter onto the website. It also listens for an event, which in this case, is a button click. After the button named "increment" is pressed, it calls the increment method.
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2> 
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
