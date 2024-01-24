export default async function getLocationForecast(
  location = "39.474275,2.830115",
) {
  const apiKey = "b6f3bfef636f4c98ac093255242401";

  try {
    const forecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
    )
      .then((response) => response.json())
      .then((response) => response.forecast.forecastday);
      return forecast;
  }
  catch(error) {
    return null;
  }
}
