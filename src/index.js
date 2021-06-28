import './stylesheets/main.scss';
import { getWeatherGIF } from './fetchGIF';
import { getWeather } from './getWeather';
import { addName, addDescription, addTemp, addWind } from './addInfo';
import { cityField, stateField, countryField, inputs, validateInput } from './formValidations';

const wrapper = document.querySelector(".wrapper");
const infoContainer = document.querySelector(".data-container");
const weatherInfo = document.getElementById("weather-data");
const weatherForm = document.getElementById("get-weather");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!cityField.validity.valid || !stateField.validity.valid || !countryField.validity.valid) {
    inputs.forEach((el) => validateInput(el));
  } else {
    let city = e.target.elements.city.value;
    let state = e.target.elements.state.value;
    let country = getCountryValue(e.target.elements.country.value, state);
    let units = e.target.elements.units.value;

    clearInfo(weatherInfo);
    clearForm();

    handleSubmit(city, units, state, country);
  }
})

const getCountryValue = (target, state) => {
  if (target) {
    return target;
  } else if (state) {
    return "USA";
  } else {
    return "";
  }
}

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
  cityField.value = '';
  stateField.value = '';
  countryField.value = '';
}