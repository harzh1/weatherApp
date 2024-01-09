// Top bar with logo and search bar and toggle button for celsius/fahrenheit
import logoimg from "./logo.png";
import "./style.css";
import api from "./api.js";
import { format } from "date-fns";
import favicon from "./logo.png";

let link =
  document.querySelector("link[rel*='icon']") || document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = favicon;
document.getElementsByTagName("head")[0].appendChild(link);

const container = document.getElementById("content");

const header = document.createElement("header");
header.classList.add("header");

const logoDiv = document.createElement("div");
logoDiv.classList.add("logo-div");

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = logoimg;

const logoText = document.createElement("p");
logoText.classList.add("logo-text");
logoText.textContent = "Mosam";

logoDiv.appendChild(logo);
logoDiv.appendChild(logoText);

const toggleDiv = document.createElement("div");
toggleDiv.classList.add("toggle-div");

const toggleButtonCelcius = document.createElement("button");
toggleButtonCelcius.classList.add("toggle-button");
toggleButtonCelcius.classList.add("celcius");
toggleButtonCelcius.classList.add("active");
toggleButtonCelcius.textContent = "°C, kph";

const toggleButtonFahrenheit = document.createElement("button");
toggleButtonFahrenheit.classList.add("toggle-button");
toggleButtonFahrenheit.classList.add("fahrenheit");
toggleButtonFahrenheit.textContent = "°F, mph";

toggleDiv.appendChild(toggleButtonCelcius);
toggleDiv.appendChild(toggleButtonFahrenheit);

header.appendChild(logoDiv);
header.appendChild(toggleDiv);

container.appendChild(header);

const main = document.createElement("main");
main.classList.add("main");

const searchDiv = document.createElement("div");
searchDiv.classList.add("search-div");

const search = document.createElement("input");
search.classList.add("search-input");
search.type = "text";
search.id = "search-input";
search.placeholder = "Enter city name";

const searchButton = document.createElement("button");
searchButton.classList.add("search-button");
searchButton.textContent = "Search";
searchButton.id = "search-btn";
searchButton.type = "submit";
searchButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
<path d="M9.88889 18.7778C14.7981 18.7778 18.7778 14.7981 18.7778 9.88889C18.7778 4.97969 14.7981 1 9.88889 1C4.97969 1 1 4.97969 1 9.88889C1 14.7981 4.97969 18.7778 9.88889 18.7778Z" stroke="#E5E6E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L16.2223 16.2222" stroke="#E5E6E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

let data;

firstCall();

async function firstCall() {
  const city = "dhanbad";
  const apiObject = api();
  data = await apiObject.getWeather(city);

  locationName.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  temperature.textContent = `${Math.round(data.current.temp_c)}°C`;

  Day.textContent = format(
    new Date(data.location.localtime),
    "EEEE, dd MMMM yyyy"
  );

  weatherDescription.textContent = data.current.condition.text;
  feelsLike.textContent = `Feels like ${Math.round(
    data.current.feelslike_c
  )}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  wind.textContent = `${Math.round(data.current.wind_kph)}km/h`;
  pressure.textContent = `${data.current.pressure_mb}mb`;
  minTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.mintemp_c
  )}°C`;
  maxTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.maxtemp_c
  )}°C`;
  visibility.textContent = `${data.current.vis_km}km`;

  forecastDay1Date.textContent = format(
    new Date(data.forecast.forecastday[1].date),
    "EEEE"
  );
  forecastDay1Temp.textContent = `${Math.round(
    data.forecast.forecastday[1].day.avgtemp_c
  )}°C`;
  forecastDay1MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[1].day.mintemp_c
  )}°C`;
  forecastDay1MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[1].day.maxtemp_c
  )}°C`;
  forecastDay1MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[1].day.maxwind_kph
  )}km/h`;

  forecastDay2Date.textContent = format(
    new Date(data.forecast.forecastday[2].date),
    "EEEE"
  );
  forecastDay2Temp.textContent = `${Math.round(
    data.forecast.forecastday[2].day.avgtemp_c
  )}°C`;
  forecastDay2MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[2].day.mintemp_c
  )}°C`;
  forecastDay2MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[2].day.maxtemp_c
  )}°C`;
  forecastDay2MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[2].day.maxwind_kph
  )}km/h`;

  forecastDay3Date.textContent = format(
    new Date(data.forecast.forecastday[3].date),
    "EEEE"
  );
  forecastDay3Temp.textContent = `${Math.round(
    data.forecast.forecastday[3].day.avgtemp_c
  )}°C`;
  forecastDay3MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[3].day.mintemp_c
  )}°C`;
  forecastDay3MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[3].day.maxtemp_c
  )}°C`;
  forecastDay3MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[3].day.maxwind_kph
  )}km/h`;
}

async function onSubmit() {
  const city = search.value;
  const apiObject = api();
  data = await apiObject.getWeather(city);

  locationName.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  temperature.textContent = `${Math.round(data.current.temp_c)}°C`;

  Day.textContent = format(
    new Date(data.location.localtime),
    "EEEE, dd MMMM yyyy"
  );

  weatherDescription.textContent = data.current.condition.text;
  feelsLike.textContent = `Feels like ${Math.round(
    data.current.feelslike_c
  )}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  wind.textContent = `${Math.round(data.current.wind_kph)}km/h`;
  pressure.textContent = `${data.current.pressure_mb}mb`;
  minTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.mintemp_c
  )}°C`;
  maxTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.maxtemp_c
  )}°C`;
  visibility.textContent = `${data.current.vis_km}km`;

  forecastDay1Date.textContent = format(
    new Date(data.forecast.forecastday[1].date),
    "EEEE"
  );
  forecastDay1Temp.textContent = `${Math.round(
    data.forecast.forecastday[1].day.avgtemp_c
  )}°C`;
  forecastDay1MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[1].day.mintemp_c
  )}°C`;
  forecastDay1MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[1].day.maxtemp_c
  )}°C`;
  forecastDay1MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[1].day.maxwind_kph
  )}km/h`;

  forecastDay2Date.textContent = format(
    new Date(data.forecast.forecastday[2].date),
    "EEEE"
  );
  forecastDay2Temp.textContent = `${Math.round(
    data.forecast.forecastday[2].day.avgtemp_c
  )}°C`;
  forecastDay2MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[2].day.mintemp_c
  )}°C`;
  forecastDay2MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[2].day.maxtemp_c
  )}°C`;
  forecastDay2MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[2].day.maxwind_kph
  )}km/h`;

  forecastDay3Date.textContent = format(
    new Date(data.forecast.forecastday[3].date),
    "EEEE"
  );
  forecastDay3Temp.textContent = `${Math.round(
    data.forecast.forecastday[3].day.avgtemp_c
  )}°C`;
  forecastDay3MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[3].day.mintemp_c
  )}°C`;
  forecastDay3MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[3].day.maxtemp_c
  )}°C`;
  forecastDay3MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[3].day.maxwind_kph
  )}km/h`;

  search.value = "";
}

searchButton.addEventListener("click", onSubmit);

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") onSubmit();
});

toggleButtonCelcius.addEventListener("click", () => {
  temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
  feelsLike.textContent = `Feels like ${Math.round(
    data.current.feelslike_c
  )}°C`;
  minTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.mintemp_c
  )}°C`;
  maxTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.maxtemp_c
  )}°C`;

  forecastDay1Temp.textContent = `${Math.round(
    data.forecast.forecastday[1].day.avgtemp_c
  )}°C`;
  forecastDay1MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[1].day.mintemp_c
  )}°C`;
  forecastDay1MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[1].day.maxtemp_c
  )}°C`;

  forecastDay2Temp.textContent = `${Math.round(
    data.forecast.forecastday[2].day.avgtemp_c
  )}°C`;
  forecastDay2MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[2].day.mintemp_c
  )}°C`;
  forecastDay2MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[2].day.maxtemp_c
  )}°C`;

  forecastDay3Temp.textContent = `${Math.round(
    data.forecast.forecastday[3].day.avgtemp_c
  )}°C`;
  forecastDay3MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[3].day.mintemp_c
  )}°C`;
  forecastDay3MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[3].day.maxtemp_c
  )}°C`;

  wind.textContent = `${Math.round(data.current.wind_kph)}kph`;
  visibility.textContent = `${data.current.vis_km}km`;

  forecastDay1MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[1].day.maxwind_kph
  )} km/h`;

  forecastDay2MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[2].day.maxwind_kph
  )} km/h`;

  forecastDay3MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[3].day.maxwind_kph
  )} km/h`;

  toggleButtonCelcius.classList.add("active");
  toggleButtonFahrenheit.classList.remove("active");
});

toggleButtonFahrenheit.addEventListener("click", () => {
  temperature.textContent = `${Math.round(data.current.temp_f)}°F`;
  feelsLike.textContent = `Feels like ${Math.round(
    data.current.feelslike_f
  )}°F`;
  minTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.mintemp_f
  )}°F`;
  maxTemp.textContent = `${Math.round(
    data.forecast.forecastday[0].day.maxtemp_f
  )}°F`;

  forecastDay1Temp.textContent = `${Math.round(
    data.forecast.forecastday[1].day.avgtemp_f
  )}°F`;
  forecastDay1MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[1].day.mintemp_f
  )}°F`;
  forecastDay1MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[1].day.maxtemp_f
  )}°F`;

  forecastDay2Temp.textContent = `${Math.round(
    data.forecast.forecastday[2].day.avgtemp_f
  )}°F`;
  forecastDay2MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[2].day.mintemp_f
  )}°F`;
  forecastDay2MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[2].day.maxtemp_f
  )}°F`;

  forecastDay3Temp.textContent = `${Math.round(
    data.forecast.forecastday[3].day.avgtemp_f
  )}°F`;
  forecastDay3MinTemp.textContent = `Min temp: ${Math.round(
    data.forecast.forecastday[3].day.mintemp_f
  )}°F`;
  forecastDay3MaxTemp.textContent = `Max temp: ${Math.round(
    data.forecast.forecastday[3].day.maxtemp_f
  )}°C`;

  wind.textContent = `${Math.round(data.current.wind_mph)}mph`;
  visibility.textContent = `${data.current.vis_miles} miles`;

  forecastDay1MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[1].day.maxwind_mph
  )} miles/h`;

  forecastDay2MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[2].day.maxwind_mph
  )} miles/h`;

  forecastDay3MaxWindSpeed.textContent = `Wind: ${Math.round(
    data.forecast.forecastday[3].day.maxwind_mph
  )} miles/h`;

  toggleButtonFahrenheit.classList.add("active");
  toggleButtonCelcius.classList.remove("active");
});

searchDiv.appendChild(search);
searchDiv.appendChild(searchButton);

const infoDiv = document.createElement("div");
infoDiv.classList.add("info-div");

const locationNameDiv = document.createElement("div");
locationNameDiv.classList.add("location-name-div");

const locationName = document.createElement("p");
locationName.classList.add("location-name");
locationName.textContent = "Dhanbad, Jharkhand, India";

locationNameDiv.appendChild(locationName);

const temperatureDiv = document.createElement("div");
temperatureDiv.classList.add("temperature-div");

const Day = document.createElement("p");
Day.classList.add("day");
Day.textContent = "";

const temperature = document.createElement("p");
temperature.classList.add("temperature");
temperature.textContent = "";

const weatherDescription = document.createElement("p");
weatherDescription.classList.add("weather-description");
weatherDescription.textContent = "";

const feelsLike = document.createElement("p");
feelsLike.classList.add("feels-like");
feelsLike.textContent = "";

temperatureDiv.appendChild(temperature);
temperatureDiv.appendChild(weatherDescription);
temperatureDiv.appendChild(feelsLike);
temperatureDiv.appendChild(Day);

const weatherDetails = document.createElement("div");
weatherDetails.classList.add("weather-details");

const humidityDiv = document.createElement("div");
humidityDiv.classList.add("humidity-div");

const humidityLabel = document.createElement("p");
humidityLabel.classList.add("humidity-label");
humidityLabel.textContent = "Humidity";

const humidity = document.createElement("p");
humidity.classList.add("humidity");
humidity.textContent = "";

humidityDiv.appendChild(humidityLabel);
humidityDiv.appendChild(humidity);

const windDiv = document.createElement("div");
windDiv.classList.add("wind-div");

const windLabel = document.createElement("p");
windLabel.classList.add("wind-label");
windLabel.textContent = "Wind";

const wind = document.createElement("p");
wind.classList.add("wind");
wind.textContent = "";

windDiv.appendChild(windLabel);
windDiv.appendChild(wind);

const pressureDiv = document.createElement("div");
pressureDiv.classList.add("pressure-div");

const pressureLabel = document.createElement("p");
pressureLabel.classList.add("pressure-label");
pressureLabel.textContent = "Pressure";

const pressure = document.createElement("p");
pressure.classList.add("pressure");
pressure.textContent = "";

pressureDiv.appendChild(pressureLabel);
pressureDiv.appendChild(pressure);

const minTempDiv = document.createElement("div");
minTempDiv.classList.add("min-temp-div");

const minTempLabel = document.createElement("p");
minTempLabel.classList.add("min-temp-label");
minTempLabel.textContent = "Min Temp";

const minTemp = document.createElement("p");
minTemp.classList.add("min-temp");
minTemp.textContent = "";

minTempDiv.appendChild(minTempLabel);
minTempDiv.appendChild(minTemp);

const maxTempDiv = document.createElement("div");
maxTempDiv.classList.add("max-temp-div");

const maxTempLabel = document.createElement("p");
maxTempLabel.classList.add("max-temp-label");
maxTempLabel.textContent = "Max Temp";

const maxTemp = document.createElement("p");
maxTemp.classList.add("max-temp");
maxTemp.textContent = "";

maxTempDiv.appendChild(maxTempLabel);
maxTempDiv.appendChild(maxTemp);

const visibilityDiv = document.createElement("div");
visibilityDiv.classList.add("visibility-div");

const visibilityLabel = document.createElement("p");
visibilityLabel.classList.add("visibility-label");
visibilityLabel.textContent = "Visibility";

const visibility = document.createElement("p");
visibility.classList.add("visibility");
visibility.textContent = "";

visibilityDiv.appendChild(visibilityLabel);
visibilityDiv.appendChild(visibility);

const weatherDiv = document.createElement("div");
weatherDiv.classList.add("weather-div");

weatherDetails.appendChild(humidityDiv);
weatherDetails.appendChild(windDiv);
weatherDetails.appendChild(pressureDiv);
weatherDetails.appendChild(minTempDiv);
weatherDetails.appendChild(maxTempDiv);
weatherDetails.appendChild(visibilityDiv);

weatherDiv.appendChild(temperatureDiv);
weatherDiv.appendChild(weatherDetails);

infoDiv.appendChild(locationNameDiv);
infoDiv.appendChild(weatherDiv);

const forecastDiv = document.createElement("div");
forecastDiv.classList.add("forecast-div");

const forecastTitle = document.createElement("p");
forecastTitle.classList.add("forecast-title");
forecastTitle.textContent = "3 Days Forecast";

const forecast = document.createElement("div");
forecast.classList.add("forecast");

const forecastDay1 = document.createElement("div");
forecastDay1.classList.add("forecast-days");

const forecastDay1Date = document.createElement("p");
forecastDay1Date.classList.add("forecast-day");
forecastDay1Date.textContent = "";

const forecastDay1Temp = document.createElement("p");
forecastDay1Temp.classList.add("forecast-day-temp");
forecastDay1Temp.textContent = "";

const forecastDay1MinTemp = document.createElement("p");
forecastDay1MinTemp.classList.add("forecast-day-min-temp");
forecastDay1MinTemp.textContent = "Min Temp: ";

const forecastDay1MaxTemp = document.createElement("p");
forecastDay1MaxTemp.classList.add("forecast-day-max-temp");
forecastDay1MaxTemp.textContent = "Max Temp: ";

const forecastDay1MaxWindSpeed = document.createElement("p");
forecastDay1MaxWindSpeed.classList.add("forecast-day-max-wind-speed");
forecastDay1MaxWindSpeed.textContent = "Wind:";

forecastDay1.appendChild(forecastDay1Date);
forecastDay1.appendChild(forecastDay1Temp);
forecastDay1.appendChild(forecastDay1MinTemp);
forecastDay1.appendChild(forecastDay1MaxTemp);
forecastDay1.appendChild(forecastDay1MaxWindSpeed);

const forecastDay2 = document.createElement("div");
forecastDay2.classList.add("forecast-days");

const forecastDay2Date = document.createElement("p");
forecastDay2Date.classList.add("forecast-day");
forecastDay2Date.textContent = "";

const forecastDay2Temp = document.createElement("p");
forecastDay2Temp.classList.add("forecast-day-temp");
forecastDay2Temp.textContent = "";

const forecastDay2MinTemp = document.createElement("p");
forecastDay2MinTemp.classList.add("forecast-day-min-temp");
forecastDay2MinTemp.textContent = "Min Temp: ";

const forecastDay2MaxTemp = document.createElement("p");
forecastDay2MaxTemp.classList.add("forecast-day-max-temp");
forecastDay2MaxTemp.textContent = "Max Temp: ";

const forecastDay2MaxWindSpeed = document.createElement("p");
forecastDay2MaxWindSpeed.classList.add("forecast-day-max-wind-speed");
forecastDay2MaxWindSpeed.textContent = "Wind: ";

forecastDay2.appendChild(forecastDay2Date);
forecastDay2.appendChild(forecastDay2Temp);
forecastDay2.appendChild(forecastDay2MinTemp);
forecastDay2.appendChild(forecastDay2MaxTemp);
forecastDay2.appendChild(forecastDay2MaxWindSpeed);

const forecastDay3 = document.createElement("div");
forecastDay3.classList.add("forecast-days");

const forecastDay3Date = document.createElement("p");
forecastDay3Date.classList.add("forecast-day");
forecastDay3Date.textContent = "";

const forecastDay3Temp = document.createElement("p");
forecastDay3Temp.classList.add("forecast-day-temp");
forecastDay3Temp.textContent = "";

const forecastDay3MinTemp = document.createElement("p");
forecastDay3MinTemp.classList.add("forecast-day-min-temp");
forecastDay3MinTemp.textContent = "Min Temp: ";

const forecastDay3MaxTemp = document.createElement("p");
forecastDay3MaxTemp.classList.add("forecast-day-max-temp");
forecastDay3MaxTemp.textContent = "Max Temp: ";

const forecastDay3MaxWindSpeed = document.createElement("p");
forecastDay3MaxWindSpeed.classList.add("forecast-day-max-wind-speed");
forecastDay3MaxWindSpeed.textContent = "Wind: ";

forecastDay3.appendChild(forecastDay3Date);
forecastDay3.appendChild(forecastDay3Temp);
forecastDay3.appendChild(forecastDay3MinTemp);
forecastDay3.appendChild(forecastDay3MaxTemp);
forecastDay3.appendChild(forecastDay3MaxWindSpeed);

forecast.appendChild(forecastDay1);
forecast.appendChild(forecastDay2);
forecast.appendChild(forecastDay3);

forecastDiv.appendChild(forecastTitle);
forecastDiv.appendChild(forecast);

main.appendChild(searchDiv);
main.appendChild(infoDiv);
main.appendChild(forecastDiv);

const footer = document.createElement("footer");
footer.classList.add("footer");

const credits = document.createElement("p");
credits.classList.add("credits");
credits.textContent = "Made with ❤️ by harzh1 | ";

const githubLink = document.createElement("a");
githubLink.classList.add("github-link");
githubLink.href = "https://github.com/harzh1/Weather-Odin";
githubLink.target = "_blank";
githubLink.textContent = "Source Code";

credits.appendChild(githubLink);

footer.appendChild(credits);

container.appendChild(main);
container.appendChild(footer);
