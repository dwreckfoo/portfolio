import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './dylan-icons.js';
import './shared-styles.js';

class HomeCard extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .push-left {
          padding-left: 12px;
        }
        paper-card {
          display: block;
          width: 512px;
          max-width: 100%;
          margin: 0 auto;
          margin-top: 1em;
          padding: 24px;
          padding-top: 28px;
          padding-bottom: 28px;
        }
        paper-card * {
          padding: 8px;
        }
        .toolbar {
          height: 34px;
          line-height: 34px;
          max-width: 100%;
          border-radius: 2px;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
        }
        a {
          color: var(--app-disabled-text);
          text-decoration: none;
          transition: all 0.4s ease;
          padding: 0;
          outline-width: 0;
        }
        a:hover {
          color: var(--app-primary-text);
        }
      </style>

      <paper-card class="md-type--text-left">
      <div class="toolbar" style\$="background-color:{{elementColor}}"></div>
      <h3 class="md-type--display3 md-type--app-primary md-type--black md-type--flatten-margin-all">{{elementSymbol}}</h3>
      <p class="md-type--display1 md-type--app-primary-text md-type--flatten-margin-all">
        {{elementName}}
      </p>
      <p class="push-left md-type--subhead md-type--text-justify md-type--app-secondary-text md-type--flatten-margin-all">
        {{elementLead}}
      </p>
      <p class="md-type--text-center">
        <a href="https://www.github.com/dylantyates" title="Github">
          <paper-icon-button icon="dylan-icons:github"></paper-icon-button>
        </a>
        <a href="https://www.instagram.com/dwreckfoo" title="Instagram">
          <paper-icon-button icon="dylan-icons:instagram"></paper-icon-button>
        </a>
        <a href="https://www.linkedin.com/in/dylanyates" title="LinkedIn">
          <paper-icon-button icon="dylan-icons:linkedin"></paper-icon-button>
        </a>
        <a name="contact" href="[[rootPath]]contact" title="Email">
          <paper-icon-button icon="dylan-icons:email"></paper-icon-button>
        </a>
      </p>
    </paper-card>
    `;
  }

  static get properties() {
    return {
      elementColor: String,
      elementSymbol: String,
      elementName: String,
      elementLead: String,
      elementLink: String
    }
  }
}

window.customElements.define('home-card', HomeCard);
