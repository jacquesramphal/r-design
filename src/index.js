import './components/my-button.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    h1 {
      font-family: sans-serif;
      }
  </style>

  <div>
  <h1>Jacques Ramphal</h1>
  <p>Component Library</p>

  </div>
`;

class HeaderNav extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('header-nav', HeaderNav);
