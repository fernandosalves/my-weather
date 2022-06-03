export class WeatherService {
  constructor() {
    this.apiKey = 'dca038ddf735a5f57854210b80314266';
    this.weatherData = {};
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });
  }

  async getPositionByCity(city, country) {
    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=${this.apiKey}`;
    const response = await fetch(endpoint);

    return await response.json();
  }

  async getWeatherData(city, country) {
    let latitude, longitude;
    let data = null;

    if (city) {
      const cityPos = await this.getPositionByCity(city, country);
      latitude = cityPos[0].lat;
      longitude = cityPos[0].lon;
    } else {
      const cityPos = await this.getCurrentPosition();
      latitude = cityPos.coords.latitude;
      longitude = cityPos.coords.longitude;
    }

    try {
      data = await this.getForecast(latitude, longitude);
    } catch (e) {
      console.log(e);
    }

    this.parseData(data);

    return this.weatherData;
  }

  async getForecast(latitude, longitude) {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;

    let response = await fetch(endpoint);

    return await response.json();
  }

  parseData(data) {
    this.weatherData.cloudiness = data.clouds.all;
    this.weatherData.windSpeed = data.wind.speed;
    this.weatherData.humidity = data.main.humidity;
    this.weatherData.temperatureValue = Math.round(data.main.temp);
    this.weatherData.temperatureHigh = Math.round(data.main.temp_max);
    this.weatherData.temperatureLow = Math.round(data.main.temp_min);
    this.weatherData.location = this.formatLocation(
      data.name,
      data.sys.country
    );
    this.weatherData.description = data.weather[0].description;
    this.weatherData.icon = this.getWeatherIcon(data.weather[0].id);
  }

  getWeatherIcon(id) {
    if (this.isThunderstorm(id)) {
      return '../assets/icons/weather/thunderstorm.svg';
    }

    if (this.isDrizzle(id) || this.isRain(id)) {
      return '../assets/icons/weather/rain.svg';
    }

    if (this.isSnow(id)) {
      return '../assets/icons/weather/snow.svg';
    }

    return '../assets/icons/weather/cloud.svg';
  }

  formatLocation(country, city) {
    if (city === null && country === null) {
      return '';
    }

    return `${city}, ${country}`;
  }

  isThunderstorm(id) {
    return id > 199 && id < 233;
  }

  isDrizzle(id) {
    return id > 299 && id < 322;
  }

  isRain(id) {
    return id > 499 && id < 532;
  }

  isSnow(id) {
    return id > 599 && id < 623;
  }
}
