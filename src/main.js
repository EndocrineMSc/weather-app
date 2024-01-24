import "./style.css";
import getForecast from "./scripts/weather-api/getForecast";
import processForecast from "./scripts/weather-api/processForecast";

const rawForecast = await getForecast();
const processedForecast = processForecast(rawForecast);

const days = document.getElementsByClassName("day");
const maxTempDiv = document.getElementById("max-temp");
const rainChanceDiv = document.getElementById("rain-chance");
const meanTempDiv = document.getElementById("mean-temp");
const rainAmountDiv = document.getElementById("rain-amount");

const WEEKDAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

if (processedForecast) {
  setDays(processedForecast);
  setForecastDetails(0);
}

function setDays(forecasts) {
  for (let i = 0; i < forecasts.length; i++) {
    const dayDiv = days[i];
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

    dayDiv.addEventListener("click", event => {
      Array.from(days).forEach(div => {
        if (div === event.target.parentElement) {
          div.classList.add("active");
          setForecastDetails(event.target.parentElement.dataset.dayIndex);
        }
        else if (div === event.target) {
          div.classList.add("active");
          setForecastDetails(event.target.dataset.dayIndex);
        } 
        else {
          div.classList.remove("active");
        }
      });
    })
  }
}

function setForecastDetails(dayIndex) {
  const forecast = processedForecast[dayIndex];
  maxTempDiv.lastElementChild.textContent = `${forecast.maxtemp_c}°C`;
  rainChanceDiv.lastElementChild.textContent = `${forecast.daily_chance_of_rain}%`;
  meanTempDiv.lastElementChild.textContent = `${forecast.avgtemp_c}°C`;
  rainAmountDiv.lastElementChild.textContent = `${forecast.totalprecip_mm} mm`;
}