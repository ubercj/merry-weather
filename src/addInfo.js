const addName = (data) => {
  const nameEl = document.createElement("h3");
  nameEl.textContent = data;
  nameEl.classList.add("info");
  return nameEl;
}

const addDescription = (data) => {
  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = data[0].toUpperCase() + data.slice(1);
  descriptionEl.classList.add("info");
  return descriptionEl;
}

const addTemp = (data, units) => {
  const tempEl = document.createElement("p");
  if (units === 'imperial') {
    tempEl.textContent = `${data} \u00B0F`
  } else {
  tempEl.textContent = `${data} \u00B0C`;
  }
  tempEl.classList.add("info");
  return tempEl;
}

const addWind = (data, units) => {
  const windEl = document.createElement("p");
  if (units === 'imperial') {
    windEl.textContent = `${data} mph`
  } else {
  windEl.textContent = `${data} m/s`;
  }
  windEl.classList.add("info");
  return windEl;
}

export { addName, addDescription, addTemp, addWind };