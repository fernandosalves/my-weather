import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('weather-detail')
export class WeatherDetail extends LitElement {
  @property({ type: String }) cloudiness = '';
  @property({ type: String }) windSpeed = '';
  @property({ type: String }) humidity = '';

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
    }
    .container > div {
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .container > div > img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div>
          <img src="../assets/icons/cloud.svg" alt="cloudiness"></img>
          <p>${this.cloudiness} &percnt;</p>
        </div>
        <div>
          <img src="../assets/icons/wind.svg" alt="wind speed"></img>
          <p>${this.windSpeed} m/s</p>
        </div>
        <div>
          <img src="../assets/icons/humidity.svg" alt="humidity"></img>
          <p>${this.humidity} &percnt;</p>
        </div>
      </div>
    `;
  }
}
