const weatherEl = document.querySelector('.container');

function renderWeather(data) {
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const html = `<article class="weather">
  <img src="${iconUrl}" alt="">
  <div class="weather-info">
    <h1>${data.name}</h1>
    <p>temp:${data.main.temp}</p>
    <p>pressure:${data.main.pressure}</p>
    <p>description:${data.weather[0].description}</p>
    <p>humidity:${data.main.humidity}</p>
    <p>speed:${data.wind.speed}</p>
    <p>deg:${data.wind.deg}</p>
  </div>
  </article>`;

  weatherEl.insertAdjacentHTML('beforeend', html);

}

function getWeatherData(city) {   
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
getWeatherData('Kyiv');
