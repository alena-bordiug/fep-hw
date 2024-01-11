const weatherEl = document.getElementById('weather-info');
const weatherBtn = document.getElementById('get-weather-btn');

weatherBtn.addEventListener('click', () => {
  const cityInput = document.getElementById('city-input').value;
  const cityInputField = document.getElementById('city-input');
  getWeather(cityInput);
  cityInputField.value = '';

  if (weatherEl) {
    weatherEl.innerHTML = '';
  }
});

function renderWeather(data) {
  if (data.weather && data.weather.length > 0) {
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const html = `<article>
  <div>
    <h1>${data.name}<img src="${iconUrl}" alt="weather-icon"></h1>
    <p>Temperature: ${data.main.temp}&deg;C</p>
    <p>Pressure: ${data.main.pressure} hPa</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Speed: ${data.wind.speed}km/h</p>
    <p>Degree: ${data.wind.deg}°</p>
  </div>
  </article>`;

    weatherEl.insertAdjacentHTML('beforeend', html);
  } else {
    alert('Weather field is missing or empty.');
  }
}

function getWeather(city) {
  const request = fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`,
  );

  request
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderWeather(data);
    });
}
