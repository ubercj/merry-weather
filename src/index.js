import './stylesheets/main.scss';
import { getWeatherGIF } from './fetchGIF';
import { getWeather } from './getWeather';
import { addName, addDescription, addTemp, addWind } from './addInfo';

const wrapper = document.querySelector(".wrapper");
const infoContainer = document.querySelector(".data-container");
const weatherInfo = document.getElementById("weather-data");
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

  clearInfo(weatherInfo);
  clearForm();

  handleSubmit(city, units, state, country);
})

const handleSubmit = async (city, units, state, country) => {
  let weatherData = await getWeather(city, units, state, country);
  fillInfo(weatherData, units);

  let gifTerm = weatherData.param;
  let gifURL = getWeatherGIF(gifTerm);
  wrapper.style.background = `url(${gifURL})`;
  wrapper.style.backgroundSize = "cover";
}

const fillInfo = (data, units) => {
  weatherInfo.appendChild(addName(data.name));
  weatherInfo.appendChild(addDescription(data.description));
  weatherInfo.appendChild(addTemp(data.temp, units));
  weatherInfo.appendChild(addWind(data.wind, units));

  infoContainer.classList.remove('hidden');
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