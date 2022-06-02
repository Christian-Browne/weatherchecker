import * as model from "./model.js";
import { getData } from "./helpers.js";
import weatherView from "./weatherView.js";

const form = document.querySelector(".form");
const searchField = document.querySelector(".search");
const temperature = document.querySelector(".temperature");
const parentElement = document.querySelector(".weather-info");

////////////////////////////////////////////////

////////////////////////////////////////////////
const controlWeather = async function (e) {
  e.preventDefault();
  model.state.city = searchField.value;
  searchField.value = "";
  await model.loadWeather(model.state.city);
  console.log(model.state.weather);

  parentElement.innerHTML = "";
  parentElement.classList.remove("hidden");

  const markup = `
    <div class="left">
      <h1 class="temperature">${model.state.weather.temperature}</h1>
    </div>
    <div class="right">
      <h2 class="city">${model.state.city}</h2>
      <p class="description">${model.state.weather.description}</p>
      <p class="wind">Wind: ${model.state.weather.wind}</p>
    </div>
  `;
  parentElement.insertAdjacentHTML("afterbegin", markup);

  document.querySelector(".forecast").innerHTML =
    model.state.weather.forecast.map(
      (data) =>
        `
    <div class="day">
      <h1 class="temp2">${data.temperature}</h1>
      <p class="description">${data.wind}</p>
    </div>
  `
    );
};

form.addEventListener("submit", controlWeather);

// renderSearchResults(form);
