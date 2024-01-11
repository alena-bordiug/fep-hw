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
    const html = `<article class="weather">
  <div class="weather-info">
    <h1>${data.name}<img src="${iconUrl}" alt="weather-icon"></h1>
    <p>temp:${data.main.temp}</p>
    <p>pressure:${data.main.pressure}</p>
    <p>description:${data.weather[0].description}</p>
    <p>humidity:${data.main.humidity}</p>
    <p>speed:${data.wind.speed}</p>
    <p>deg:${data.wind.deg}</p>
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
