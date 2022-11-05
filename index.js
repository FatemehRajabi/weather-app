let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];

let hour = date.getHours();
let minute = date.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hour}:${minute}`;

function ShowCityTemp(response) {
  let currentDegree = document.querySelector("#current-degree");
  currentDegree.innerHTML = Math.round(response.data.main.temp);
  celciusDegree = Math.round(response.data.main.temp);
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = response.data.name;

  let currentDescription = document.querySelector("h4");
  currentDescription.innerHTML = response.data.weather[0].description;

  let weatherIcon = document
    .querySelector("#weather-icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}
function search(city) {
  let apiKey = "15814c9d9c94eb29a0eaf3fd0a9a499e";
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCity).then(ShowCityTemp);
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;

  search(city);
}
let form = document.querySelector("form");
form.addEventListener("submit", showCity);

function convertToF(event) {
  event.preventDefault();
  let celciusTemp = document.querySelector("#current-degree");

  let fahrenheitDegree = Math.round((celciusDegree * 9) / 5 + 32);
  celciusTemp.innerHTML = fahrenheitDegree;
}

function returnToC(event) {
  event.preventDefault();
  let celciusTemp = document.querySelector("#current-degree");
  celciusTemp.innerHTML = Math.round(celciusDegree);
}

let celciusDegree = null;
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToF);
let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", returnToC);

//function getLoc(position) {
//console.log(position);
//let latitude = position.coords.latitude;
// let longitude = position.coords.longitude;
// let apiKey = "15814c9d9c94eb29a0eaf3fd0a9a499e";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(showTemp);
//}

//function showTemp(response) {
//console.log(response.data);
//let decription = response.data.weather[0].description;
//let currentTemp = document.querySelector("#current-degree");
//currentTemp.innerHTML = Math.round(response.data.main.temp);
//let h4 = document.querySelector("h4");
//h4.innerHTML = decription;
//let weatherIcon = document
// .querySelector("#weather-icon")
//.setAttribute(
//    "src",
//   `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//  );
//}
//navigator.geolocation.getCurrentPosition(getLoc);
