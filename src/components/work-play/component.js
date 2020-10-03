
const template = document.createElement('template');

template.innerHTML = `

  <style>
    @import "all.css"
  </style>
  <div id="grid-parent" class="grid-parent">
            <span class="grid-card yellow">
              <span class="caption"><p>This is a label</p></span>
              <a class="zoom"><img draggable="false" src="i/j.svg"></a>
            </span>
            <span class="grid-card grey">
              <span class="caption"><p>This is a label</p></span>
              <a class="zoom"><img draggable="false" src="i/gob.svg"></a>
            </span>
            <span class="grid-card pink">
              <a class="gif hidemobile"></a>
              <span class="caption showmobile"><p>This is a label</p></span>
              <a class="showmobile"><img draggable="false" src="i/avatar.svg"></a>
            </span>
            <span class="grid-card grey">
              <span class="caption"><p>This is a label</p></span>
              <a class="zoom"><img draggable="false" src="i/template-m.svg"></a>
            </span>
            <span class="grid-card twowide rose">
              <span class="caption"><p>This is a label</p></span>
              <a class="zoom"><img draggable="false" src="i/dod.svg"></a>
            </span>
            <span class="grid-card hero blue">
              <span class="caption"><p>This is a label</p></span>
              <a href="project.html" class="zoom"><img draggable="false" src="i/glo.svg"></a>
            </span>
          </div>
`;

class WorkPlay extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('work-play', WorkPlay);
