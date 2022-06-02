import * as model from "./model.js";

export class WeatherView {
  parentElement = document.getElementsByTagName("body");
  render(data) {
    const markup = this.generateMarkup();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkup() {
    return `
    <h1 class="temperature">${model.state.weather.temperature}</h1>
    `;
  }
}

export default new WeatherView();
