import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('weather-location')
export class WeatherTemperature extends LitElement {
  @property({ type: String }) location = '';
  @property({ type: String }) description = '';
  @property({ type: String }) icon = '';

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

  render() {
    return html`
      <div class="container">
        <div class="location">${this.location}</div>
        <div class="description">${this.description}</div>
        <img class="icon" src="${this.icon}" />
      </div>
    `;
  }
}
