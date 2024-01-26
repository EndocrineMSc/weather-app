import "./style.css";
import getForecast from "./scripts/weather-api/getForecast";
import processForecast from "./scripts/weather-api/processForecast";

const locationInput = document.getElementById("header");
const days = document.getElementsByClassName("day");
const maxTempDiv = document.getElementById("max-temp");
const rainChanceDiv = document.getElementById("rain-chance");
const meanTempDiv = document.getElementById("mean-temp");
const rainAmountDiv = document.getElementById("rain-amount");
const DEFAULT_LOCATION = "39.474275,2.830115" // Son Atem Mallorca
const DEFAULT_LOCATION_NAME = "Son Atem";

const WEEKDAYS = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

locationInput.addEventListener("change", event => {updateForecast(event)});

async function updateForecast(data) {
  const rawForecast = data ? await getForecast(data.target.value) : await getForecast(DEFAULT_LOCATION);
  const processedForecast = processForecast(rawForecast);

  if (processedForecast) {
    setDays(processedForecast);
    setForecastDetails(processedForecast, 0);
    locationInput.value = data ? data.target.value : DEFAULT_LOCATION_NAME;
    locationInput.classList.remove("invalid");
  }
  else {
    locationInput.classList.add("invalid");
  }
}

function setDays(forecasts) {
  for (let i = 0; i < forecasts.length; i++) {
    const dayDiv = days[i];

    const oldImage = dayDiv.getElementsByTagName("img")[0];
    if (oldImage) {
      oldImage.remove();
    }

    dayDiv.dataset.dayIndex = i;

    const currentDay = new Date();
    currentDay.setDate(currentDay.getDate() + i);

    const day = currentDay.getDate();
    const year = currentDay.getFullYear();
    const weekDay = currentDay.getDay();

    const dayName = WEEKDAYS[weekDay];
    const month = MONTHS[currentDay.getMonth()];

    const dayNameDiv = dayDiv.firstElementChild;
    dayNameDiv.textContent = dayName;

    const dateDiv = dayNameDiv.nextElementSibling;
    dateDiv.textContent = `${day}. ${month}. ${year}`;

    const conditionImage = new Image();
    conditionImage.src = forecasts[i].condition.icon;

    const conditionText = dateDiv.nextElementSibling;
    conditionText.textContent = forecasts[i].condition.text;
    dayDiv.insertBefore(conditionImage, conditionText);

    dayDiv.addEventListener("click", (event) => {
      Array.from(days).forEach((div) => {
        if (div === event.target.parentElement) {
          div.classList.add("active");
          setForecastDetails(forecasts, event.target.parentElement.dataset.dayIndex);
        } else if (div === event.target) {
          div.classList.add("active");
          setForecastDetails(forecasts, event.target.dataset.dayIndex);
        } else {
          div.classList.remove("active");
        }
      });
    });
  }
}

function setForecastDetails(processedForecast, dayIndex) {
  const forecast = processedForecast[dayIndex];
  maxTempDiv.lastElementChild.textContent = `${forecast.maxtemp_c}°C`;
  rainChanceDiv.lastElementChild.textContent = `${forecast.daily_chance_of_rain}%`;
  meanTempDiv.lastElementChild.textContent = `${forecast.avgtemp_c}°C`;
  rainAmountDiv.lastElementChild.textContent = `${forecast.totalprecip_mm} mm`;
}

updateForecast();