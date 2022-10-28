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

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
}
//let apiKey = "15814c9d9c94eb29a0eaf3fd0a9a499e";

//let apiUrlCity = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//axios.get(apiUrlCity).then(ShowCityTemp);
//let form = document.querySelector("form");
//form.addEventListener("submit", showCity);
//function ShowCityTemp(response) {
//console.log(response);
//let Degree = response.data.main.temp;
//let currentDegree = document.querySelector("h3");
// currentDegree.innerHTML = Degree;
//}
function getLoc(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "15814c9d9c94eb29a0eaf3fd0a9a499e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function showTemp(response) {
  let currentTemp = document.querySelector("#current-degree");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}
navigator.geolocation.getCurrentPosition(getLoc);
