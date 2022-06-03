import { html, LitElement, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit-html/directives/class-map.js';

import './components/weather-detail';
import './components/weather-temperature';
import './components/weather-location';

import { WeatherService } from './services/weather-service.js';

@customElement('my-weather')
export class MyWeather extends LitElement {
  @property({ type: String }) city = '';

  @state({ type: Boolean }) _day = false;
  @state({ type: Boolean }) _isLoading = false;
  @state({ type: Object }) _weatherService = new WeatherService();
  @state({ type: Object }) _weatherData = null;
  @state({ type: String }) _dayPeriod = '';

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      background-color: #303544;
    }
    .weather-container {
      flex: 0 1 35%;
      display: flex;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.9);
    }
    .weather-container {
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .loading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .day {
      background-image: url('../assets/images/morning.jpg');
    }
    .night {
      background-image: url('../assets/images/night.jpg');
    }
  `;

  async connectedCallback() {
    super.connectedCallback();

    this._weatherData = await this._weatherService.getWeatherData();
    this.getDayPeriod();

    this._isLoading = true;
  }

  getDayPeriod() {
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;

    this._dayPeriod = isDayTime ? 'day' : 'night';
  }

  render() {
    const classes = {
      day: this._dayPeriod === 'day',
      night: this._dayPeriod === 'night',
    };

    return html`
      <div class="weather-container ${classMap(classes)}">
        ${when(
          this._isLoading,
          () => html`
            <weather-temperature
              .temperatureValue=${this._weatherData.temperatureValue}
              .temperatureHigh=${this._weatherData.temperatureHigh}
              .temperatureLow=${this._weatherData.temperatureLow}
            ></weather-temperature>
            <weather-location
              .location="${this._weatherData.location}"
              .description="${this._weatherData.description}"
              .icon="${this._weatherData.icon}"
            ></weather-location>
            <weather-detail
              .cloudiness="${this._weatherData.cloudiness}"
              .windSpeed="${this._weatherData.windSpeed}"
              .humidity="${this._weatherData.humidity}"
            ></weather-detail>
          `,
          () => html`<div class="loading">forging the data</div> `
        )}
      </div>
    `;
  }
}
