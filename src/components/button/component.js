// Styles
const template = document.createElement('template');

template.innerHTML = `

  <style>
    @import "style.css"
  </style>

  <div class="container">
    <button>Label goes here</button>
  </div>
`;

class Button extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('my-button', Button);
