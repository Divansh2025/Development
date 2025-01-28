document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "cf726907de6864dfd47c087c797f86ac";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw error, also server/database is always in another continent, so try catch
    try {
      const weatherData = await fetchWeatherData(city); //we have to wait for the data to be fetched
      displayWeatherData(weatherData);
    } catch (error) {
      showErrorMessage();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data from api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }

  // javascript roundoff temperature: https://www.w3schools.com/jsref/jsref_round.asp

  function displayWeatherData(mydata) {
    // display the data
    console.log(mydata);
    const { name, main, weather } = mydata;
    cityNameDisplay.textContent = name;
    // now roundoff the temperature
    temperatureDisplay.textContent = `Temperature: ${Math.round(main.temp)}°C`; // `Temperature: main.temp`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`; // `Temperature: main.temp`;

    // unlock hidden class: weatherInfo
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showErrorMessage() {
    // show error message
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
