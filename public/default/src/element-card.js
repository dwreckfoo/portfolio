import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../node_modules/@polymer/paper-card/paper-card.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import './shared-styles.js';

class ElementCard extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 16px;
        }
        @media (max-width: 359px) {
          :host {
            padding: 16px 0;
          }
        }
        .container {
          max-width: 768px;
          margin: 0 auto;
        }
        img {
          display: block;
          max-width: 100%;
          width: 248px;
          height: auto;
          margin: 0 auto;
        }
        .push-left {
          padding-left: 12px;
        }
        .default-height-width {
          min-height: 154px;
          max-width: 256px;
        }
        paper-card {
          width: 320px;
          max-width: 100%;
          min-height: 522px;
          padding: 16px;
          padding-bottom: 32px;
        }
        paper-card * {
          padding: 8px;
        }
        .toolbar {
          height: 34px;
          max-width: 100%;
          border-radius: 2px;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
        }
        a {
          color: inherit;
          text-decoration: none;
          transition: all 0.4s ease;
        }
        .md-type--app-icon-inactive:hover {
          color: var(--app-primary-color);
        }
        iron-icon {
          height: 16px;
          width: 16px;
          margin-top: -2px;
        }
      </style>

      <paper-card class="md-type--text-left">
        <div class="toolbar" style\$="background-color:{{elementColor}}"></div>
        <h4 class="push-left md-type--subhead md-type--app-secondary-text md-type--flatten-margin-bottom">{{elementCategory}} Elements</h4>
        <h3 class="md-type--display3 md-type--app-primary md-type--black md-type--flatten-margin-all">{{elementSymbol}}</h3>
        <p class="md-type--display1 md-type--flatten-margin-all">
          <span class="md-type--display1 md-type--app-primary-text md-type--flatten-margin-bottom">{{elementName}}</span>
        </p>
        <p class="push-left default-height-width md-type--subhead md-type--app-secondary-text md-type--flatten-margin-all md-type--text-justify">
          {{elementLead}}
        </p>
        <p class="md-type--display1 md-type--text-right md-type--flatten-margin-all">
          <a href\$="{{elementLink}}" class="md-type--button md-type--app-icon-inactive md-type--bold" title="{{elementLink}}" target="_blank" rel="noopener nofollower">Read More <iron-icon icon="dylan-icons:open_in_new"></iron-icon></a>
        </p>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      elementColor: String,
      elementCategory: String,
      elementSymbol: String,
      elementName: String,
      elementLead: String,
      elementLink: String
    };
  }

}

window.customElements.define('element-card', ElementCard);