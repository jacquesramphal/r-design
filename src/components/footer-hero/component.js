
const template = document.createElement('template');

template.innerHTML = `

<style>
  @import "all.css"
</style>

  <footer class="fullvh grey">
      <div id="footer" class="container">

        <div id="bio-text" class="">
          <h2 class="subtle">I'm a front-end designer of things at <a href="https://myplanet.com/" target="_blank">Myplanet</a></h2>
        </div>

        <div id="contact" class="">
          <h3 id="copyright" class="">☺ 2020 Jacques Ramphal</h3>
          <div id="contactlinks" class="">
            <h3 class="justify-end hidemobile"><a href="https://www.linkedin.com/in/jacquesramphal/" target="_blank">Linkedin</a></h3>
            <h3 class="justify-end hidemobile"><a href="mailto:jacquesramphal@gmail.com" target="_blank">Email</a></h3>
          </div>
        </div>

      </div>
    </footer>

`;

class FooterHero extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('footer-hero', FooterHero);
