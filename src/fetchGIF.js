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

export { getWeatherGIF };