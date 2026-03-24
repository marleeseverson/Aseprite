const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const API_KEY = "0f507ae639c7267738ca46e82cd8778f";

searchBtn.addEventListener('click', function() {
  const city = cityInput.value;
  console.log(city);
  fetchWeather(city);
  console.log(fetchWeather());
});

function fetchWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.log('Something went wrong:', error);
    });
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = 'Temp: ' + data.main.temp + '°C';
    document.getElementById('description').textContent = 'Weather: ' + data.weather[0].description;
    document.getElementById('humidity').textContent = 'Humidity: ' + data.main.humidity + '%';
    document.getElementById('wind').textContent = 'Wind: ' + data.wind.speed + ' m/s';
}