const getWeatherGIF = (term) => {
  switch (term) {
    case 'Clouds':
      return 'https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif';
    case 'Clear':
      return 'https://media.giphy.com/media/WzLDljBpplUvm/giphy.gif';
    case 'Haze':
      return 'https://media.giphy.com/media/LmC5rpntvJPxe/giphy.gif';
    case 'Rain':
      return 'https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif';
    case 'Drizzle':
      return 'https://media.giphy.com/media/xT9GEOg09OuResnZ6g/giphy.gif';
    case 'Thunderstorm':
      return 'https://media.giphy.com/media/iN6lLmUb8exMI/giphy.gif';
    case 'Snow':
      return 'https://media.giphy.com/media/PkaZUCdVm2c5G/giphy.gif';
    default:
      return 'https://i.ytimg.com/vi/r4sdwdtCiXQ/maxresdefault.jpg';
  }
}

const fetchGIF = async (term) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=QRj98GT4aMFT6yvQvGtLjwOGKsJcLygh&q=${term}`,
      {mode: 'cors'}
    );
    const gifData = await response.json();
    return gifData.data[0].images.original.url;
  } catch (e) {
    console.log('API call failed for some reason.');
    return 'https://i.ytimg.com/vi/r4sdwdtCiXQ/maxresdefault.jpg';
  }
}

export { fetchGIF, getWeatherGIF };