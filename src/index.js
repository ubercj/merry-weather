import './stylesheets/main.scss';

const infoContainer = document.getElementById("weather-data");
const weatherForm = document.getElementById("get-weather");
const locationInput = document.getElementById("location");

const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=imperial`,
      {mode: 'cors'}
    );
    const data = await response.json();
    const result = {
      name: data.name,
      description: data.weather[0].description,
      temp: data.main.temp
    };

    addInfo('City', result.name);
    addInfo('Weather', result.description);
    addInfo('Temperature', result.temp);

    locationInput.value = '';
  } catch (e) {
    console.log(e);
    addInfo('Error', 'We couldn\'t find that location.')
  }
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = e.target.elements.location.value;
  clearInfo(infoContainer);
  getWeather(location);
})

const addInfo = (name, data) => {
  const infoBox = document.createElement("p");
  infoBox.textContent = `${name}: ${data}`;
  infoBox.classList.add("info");
  infoContainer.appendChild(infoBox);
}

const clearInfo = (element) => {
  while (element.firstChild) {
    element.lastChild.remove();
  }
}