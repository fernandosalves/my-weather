import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('weather-detail')
export class WeatherDetail extends LitElement {
  @property({ type: Object }) weatherData = {};

  @state({ type: String }) _cloudiness = '';
  @state({ type: String }) _windSpeed = '';
  @state({ type: String }) _humidity = '';

  static styles = css`
    :host {
      flex: 0 1 10%;
      display: flex;
      flex-direction: row;
    }
    .container {
      flex: 1;
      display: flex;
      flex-direction: row;
      backdrop-filter: blur(4px);
    }
    .container > div {
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .container > div > img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this._cloudiness = this.weatherData.cloudiness;
    this._windSpeed = this.weatherData.windSpeed;
    this._humidity = this.weatherData.humidity;
  }

  render() {
    return html`
      <div class="container">
        <div>
          <img src="../assets/icons/cloud.svg" alt="cloudiness"></img>
          <p>${this._cloudiness} &percnt;</p>
        </div>
        <div>
          <img src="../assets/icons/wind.svg" alt="wind speed"></img>
          <p>${this.weatherData.windSpeed} m/s</p>
        </div>
        <div>
          <img src="../assets/icons/humidity.svg" alt="humidity"></img>
          <p>${this.weatherData.humidity} &percnt;</p>
        </div>
      </div>
    `;
  }
}
