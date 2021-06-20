import './stylesheets/main.scss';
import { fetchGIF } from './fetchGIF';
import { getWeather } from './getWeather';
import { addName, addDescription, addTemp, addWind } from './addInfo';

const infoContainer = document.getElementById("weather-data");
const weatherImage = document.getElementById("weather-image");
const weatherForm = document.getElementById("get-weather");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const countryInput = document.getElementById("country");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = e.target.elements.city.value;
  let state = e.target.elements.state.value;
  let country = e.target.elements.country.value;
  let units = e.target.elements.units.value;

  clearInfo(infoContainer);
  clearForm();

  handleSubmit(city, units, state, country);
})

const handleSubmit = async (city, units, state, country) => {
  let weatherData = await getWeather(city, units, state, country);
  fillInfo(weatherData, units);

  let gifTerm = weatherData.param;
  let gifURL = await fetchGIF(gifTerm);
  weatherImage.src = gifURL;
}

const fillInfo = (data, units) => {
  infoContainer.appendChild(addName(data.name));
  infoContainer.appendChild(addDescription(data.description));
  infoContainer.appendChild(addTemp(data.temp, units));
  infoContainer.appendChild(addWind(data.wind, units));
}

const clearInfo = (element) => {
  while (element.firstChild) {
    element.lastChild.remove();
  }
}

const clearForm = () => {
  cityInput.value = '';
  stateInput.value = '';
  countryInput.value = '';
}