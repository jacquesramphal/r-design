import { WorkPlay } from '../work-play/component.js'

const template = document.createElement('template');

template.innerHTML = `

  <style>
    @import "all.css"
  </style>
  <div class="container">
    <header class="">
      <h3 class="subtle showmobile">Jake Ramphal</h3>
      <h3 class="subtle hidemobile">Jacques Ramphal</h3>
      <h3 class="justify-end"><a href="#footer">Info</a></h3>
    </header>
    <work-play></work-play>
  </div>

`;

class MainHeader extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('main-header', MainHeader);
