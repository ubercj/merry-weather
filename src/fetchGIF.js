const getWeatherGIF = (term) => {
  switch (term) {
    case 'Clouds':
      return 'https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif';
    case 'Clear':
      return 'https://media.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif';
    case 'Haze':
      return 'https://media.giphy.com/media/LmC5rpntvJPxe/giphy.gif';
    case 'Rain':
      return 'https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif';
    case 'Drizzle':
      return 'https://media.giphy.com/media/xT9GEOg09OuResnZ6g/giphy.gif';
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