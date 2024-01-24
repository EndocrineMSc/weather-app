export default function (rawForecast) {
  if (rawForecast) {
    const forecasts = [];
    rawForecast.forEach((day) => {
      forecasts.push(day.day);
    });
    return forecasts;
  }
  return null;
}
