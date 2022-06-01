import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('weather-temperature')
export class WeatherTemperature extends LitElement {
  @property({ type: String }) temperatureValue = '';
  @property({ type: String }) temperatureHigh = '';
  @property({ type: String }) temperatureLow = '';

  static styles = css`
    :host {
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
    }
    .container {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .temperature {
      font-size: 7em;
      color: rgba(255, 255, 255, 0.75);
    }
    .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .temperature_scale {
      padding-top: 5px;
      font-size: 2em;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.75);
    }
    .temperature_high {
      padding-top: 5px;
    }
    .temperature_high img {
      vertical-align: middle;
    }
    .temperature_low img {
      vertical-align: middle;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="temperature">${this.temperatureValue}</div>
        <div class="right-container">
          <div class="temperature__scale">&deg;C</div>
          <div class="temperature_high">
            <img src="../assets/icons/high.svg" /><span
              >${this.temperatureHigh}</span
            >&deg;
          </div>
          <div class="temperature_low">
            <img src="../assets/icons/low.svg" />
            <span> ${this.temperatureLow} </span>&deg;
          </div>
        </div>
      </div>
    `;
  }
}
