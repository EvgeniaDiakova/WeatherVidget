import { cityInput } from "./cityInput.js";
import { fetchDataAndDisplay } from "./weatherData.js";

const defaultCity = "Belgrad";

window.addEventListener("load", () => {
  cityInput.value = defaultCity;
  fetchDataAndDisplay(defaultCity);
});

export function groupForecastsByDay(forecasts) {
  const groupedForecasts = {};
  forecasts.forEach((forecast) => {
    const date = new Date(forecast.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    if (!groupedForecasts[day]) {
      groupedForecasts[day] = [];
    }
    groupedForecasts[day].push(forecast);
  });
  return Object.values(groupedForecasts);
}
