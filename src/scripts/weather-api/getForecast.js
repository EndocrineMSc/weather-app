export default async function getLocationForecast(
  location = "39.474275,2.830115",
) {
  const apiKey = "b6f3bfef636f4c98ac093255242401";
  location.trim();

  try {
    const forecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" },
    )
      .then((response) => response.json())
      .then((response) => response.forecast.forecastday);
    return forecast;
  } catch (error) {
    alert("Ups, das hat nicht geklappt. Eventuell ist der Ort nicht bekannt");
    return null;
  }
}
