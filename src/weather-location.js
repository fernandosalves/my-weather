import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('weather-location')
export class WeatherTemperature extends LitElement {
  @property({ type: Object }) weatherData = {};

  @state({ type: String }) _location = '';
  @state({ type: String }) _description = '';
  @state({ type: String }) _icon = '';

  static styles = css`
    :host {
      flex: 1 1 30%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .location {
      text-transform: uppercase;
      font-weight: bold;
    }
    .description {
      text-transform: lowercase;
      margin-left: 10%;
      margin-right: 10%;
      text-align: center;
    }
    .description:first-letter {
      text-transform: uppercase;
    }
    .icon {
      width: 12em;
      padding-bottom: 9em;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this._location = this.weatherData.location;
    this._description = this.weatherData.description;
    this._icon = this.weatherData.weatherIcon;
  }

  render() {
    return html`
      <div class="container">
        <div class="location">${this._location}</div>
        <div class="description">${this._description}</div>
        <img class="icon" src="${this._icon}" />
      </div>
    `;
  }
}
