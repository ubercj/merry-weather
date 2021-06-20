const _makeUrl = (city, units, state, country) => {
  if (state && country) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;
  } else if (state) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;
  } else {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf025b14eddc7fc6ffdf78d47f089146&units=${units}`;
  }
}

const getWeather = async (city, units, state, country) => {
  let url = _makeUrl(city, units, state, country);
  try {
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json();
    return {
      name: data.name,
      param: data.weather[0].main,
      description: data.weather[0].description,
      temp: data.main.temp,
      wind: data.wind.speed
    };
  } 
  catch (e) {
    console.log(e);
    return {
      name: "Error",
      description: "We couldn\'t find that location.",
      temp: ""
    };
  }
}

export { getWeather };