
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

return`${day} ${hours}:${minutes}`;

}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];




if (minutes < 10) {
  `0${minutes}`;
}

function displayWeather(response) {
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[2].description;
  
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dayElement.innerHTML = formatDate(response.data.dt * 1000);
 
}
let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);



//let form = document.querySelector("#search-form");
//form.addEventListener("submit", handleSubmit);


//function searchCity(city) {
  //let myApiKey = "09fa0f7b1ffedeb38b6e5527906a4325";

  //let myApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
  //axios.get(myApiUrl).then(displayWeather);
//}
//function handleSubmit(event) {
  //event.preventDefault();
  //let city = document.querySelector("#search-text-input").value;
  //searchCity(city);
//}

//function getCurrentPosition(event) {
  //event.preventDefault();
  //navigator.geolocation.getCurrentPosition(searchLocation);
//}
//function searchLocation(position) {
  //let apiKey = "09fa0f7b1ffedeb38b6e5527906a4325";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
  //axios.get(apiUrl).then(displayWeather);
//}
//let locationInput = document.querySelector("#current-location");
//locationInput.addEventListener("click", getCurrentPosition);
