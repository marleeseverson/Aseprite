const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const API_KEY = "0f507ae639c7267738ca46e82cd8778f";

searchBtn.addEventListener('click', function() {
  const city = cityInput.value;
  console.log(city);
  fetchWeather(city);
});

function fetchWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if(data.cod == 200){
        displayWeather(data);
      }else{
        document.getElementById("weather-display").textContent = "City not found, Please try again"
      }
      
    })
    .catch(function(error) {
      console.log('Something went wrong:', error);
    });
}

function displayWeather(data) {
  document.getElementById('country-name').textContent = "Country : " + data.sys.country;
  document.getElementById('city-name').textContent = "City : " + data.name;
  document.getElementById('temperature').textContent = 'Temp: ' + data.main.temp + '°F';
  document.getElementById('description').textContent =
    'Weather: ' + data.weather[0].description.charAt(0).toUpperCase()
    + data.weather[0].description.slice(1);
  document.getElementById('humidity').textContent = 'Humidity: ' + data.main.humidity + '%';
  document.getElementById('wind').textContent = 'Wind: ' + data.wind.speed + ' m/s';
}