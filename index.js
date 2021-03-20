let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
}
function searchCity(city) {
  let myApiKey = "09fa0f7b1ffedeb38b6e5527906a4325";

  let myApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
  axios.get(myApiUrl).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

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