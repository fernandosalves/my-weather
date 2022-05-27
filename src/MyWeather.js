import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-weather')
export class MyWeather extends LitElement {
  render() {
    return html` My Weather `;
  }
}
