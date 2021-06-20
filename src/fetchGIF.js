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

export { fetchGIF };