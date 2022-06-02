import { getData } from "./helpers.js";

export const state = {
  city: {},
  weather: {},
};

export const loadWeather = async function (city) {
  const data = await getData(city);
  console.log(data);

  state.weather = {
    temperature: data.temperature,
    wind: data.wind,
    description: data.description,
    forecast: data.forecast,
  };

  console.log(data);
  console.log(state);
};
