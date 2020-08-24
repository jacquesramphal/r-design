import './components/button/component.js';
import './components/main-header/component.js';
import './components/footer-hero/component.js'

const template = document.createElement('template');

template.innerHTML = `
  <style>
  </style>

  <div>
  <main-header></main-header>
  <recent-work></recent-work>
  <footer-hero></footer-hero>
  </div>
`;

class MyApp extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('my-app', MyApp);
