import "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../node_modules/@polymer/paper-styles/typography.js";
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    /* TYPOGRAPHY (adjusted line-heights for cutoff lowercase */
      .md-type--display4 {
        @apply --paper-font-display4;
        /* DEFAULT 120px */
        line-height: 128px;
      }
      .md-type--display3 {
        @apply --paper-font-display3;
        /* DEFAULT 120px */
        line-height: 64px;
      }
      .md-type--display2 {
        @apply --paper-font-display2;
        margin-left: -4px;
      }
      .md-type--display1 {
        @apply --paper-font-display1;
        margin-left: -4px;
      }
      .md-type--headline {
        @apply --paper-font-headline
      }
      .md-type--title {
        @apply --paper-font-title;
      }
      .md-type--subhead {
        @apply --paper-font-subhead;
      }
      .md-type--body2 {
        @apply --paper-font-body2;
      }
      .md-type--body1 {
        @apply --paper-font-subhead;
      }
      .md-type--caption {
        @apply --paper-font-caption;
      }
      .md-type--menu {
        @apply --paper-font-menu;
      }
      .md-type--button {
        @apply --paper-font-button;
        font-size: 16px;
      }
      .md-type--code2 {
        @apply --paper-font-code2;
      }
      .md-type--code1 {
        @apply --paper-font-code1;
      }
/* TYPOGRAPHY ALIGNMENT */
      .md-type--text-center {
        text-align: center;
      }
      .md-type--text-right {
        text-align: right;
      }
      .md-type--text-left {
        text-align: left;
      }
      .md-type--text-justify {
        text-align: justify;
      }
/* TYPOGRAPHY FONT WEIGHTS */
      .md-type--thin {
        font-weight: 300;
      }
      .md-type--bold {
        font-weight: 500;
      }
      .md-type--black {
        font-weight: 800;
      }
/* TYPOGRAPHY MARGIN ADJUST */
      .md-type--flatten-margin-all {
        margin: 0;
      }
      .md-type--flatten-margin-top {
        margin-top: 0;
      }
      .md-type--flatten-margin-bottom {
        margin-bottom: 0;
      }
/* LIGHT THEME TYPOGRAPHY COLORS */
      .md-type--light-primary-text {
        color: var(--material-light-theme-primary-text);
      }
      .md-type--light-secondary-text {
        color: var(--material-light-theme-secondary-text);
      }
      .md-type--light-disabled-text {
        color: var(--material-light-theme-disabled-text);
      }
      .md-type--light-icon-active {
        color: var(--material-light-theme-active-icon);
      }
      .md-type--light-icon-inactive {
        color: var(--material-light-theme-inactive-icon);
      }
/* DARK THEME TYPOGRAPHY COLORS */
      .md-type--dark-primary-text {
        color: var(--material-dark-theme-primary-text);
      }
      .md-type--dark-secondary-text {
        color: var(--material-dark-theme-secondary-text);
      }
      .md-type--dark-disabled-text {
        color: var(--material-dark-theme-disabled-text);
      }
      .md-type--dark-icon-active {
        color: var(--material-dark-theme-active-icon);
      }
      .md-type--dark-icon-inactive {
        color: var(--material-dark-theme-inactive-icon);
      }
/* APP THEME TYPOGRAPHY COLORS */
      .md-type--app-primary-text {
        color: var(--app-primary-text);
      }
      .md-type--app-secondary-text {
        color: var(--app-secondary-text);
      }
      .md-type--app-disabled-text {
        color: var(--app-disabled-text);
      }
      .md-type--app-icon-active {
        color: var(--app-primary-color);
      }
      .md-type--app-icon-inactive {
        color: var(--app-disabled-text);
      }
      .md-type--app-primary {
        color: var(--app-primary-color);
      }
      .md-type--app-secondary {
        color: var(--app-secondary-color);
      }
/* GRIDDING */
      .container {
        @apply --layout-horizontal;
      }
      .col-center {
        @apply --layout-self-center;
      }
      .col {
        @apply --layout-flex;
      }
      .col-auto {
        @apply --layout-flex-auto;
      }
      .col-1 {
        @apply --layout-flex-1;
      }
      .col-2 {
        @apply --layout-flex-2;
      }
      .col-3 {
        @apply --layout-flex-3;
      }
      .col-4 {
        @apply --layout-flex-4;
      }
      .col-5 {
        @apply --layout-flex-5;
      }
      .col-6 {
        @apply --layout-flex-6;
      }
      .col-7 {
        @apply --layout-flex-7;
      }
      .col-8 {
        @apply --layout-flex-8;
      }
      .col-9 {
        @apply --layout-flex-9;
      }
      .col-10 {
        @apply --layout-flex-10;
      }
      .col-11 {
        @apply --layout-flex-11;
      }
      .col-12 {
        @apply --layout-flex-12;
      }
/* GUTTERS */
      .col-2g { padding: 2px; }
      .col-4g { padding: 4px; }
      .col-8g { padding: 8px; }
      .col-16g { padding: 16px; }
      .col-24g { padding: 24px; }
      .col-32g { padding: 32px; }
      @media (max-width: 600px) {
        .container {
          @apply --layout-vertical;
        }
        paper-card {
          width: 100%;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);