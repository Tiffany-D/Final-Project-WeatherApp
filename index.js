
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
 let minutes = date.getMinutes();
  if (minutes < 10) {
  minutes = `0${minutes}`;}
 
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
 let day = days[date.getDay()];
return`${day} ${hours}:${minutes}`;

}

function displayWeather(response) {
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dayElement = document.querySelector("#day");
    let iconElement = document.querySelector("#icon");
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dayElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 
}




let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


function searchCity(city) {
  let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  searchCity(cityInput.value);
}
function convertToF(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitDegrees = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitDegrees); 
}

function convertToC(event) {
  event.preventDefault();
   celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}









let fahrenheitLink = document.querySelector(#fahrenheit);
fahrenheitLink.addEventListener("click", convertToF);


let celsiusLink = document.querySelector(#celsius);
celsiusLink.addEventListener("click", convertToC);


let celsiusTemperature = null;






//
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let locationInput = document.querySelector("#current-location");
locationInput.addEventListener("click", getCurrentPosition);
