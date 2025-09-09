// Key for the API
const apiKey = "b28975546fb403cbcdd751bd8c896b95";

// API URL
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Select the input field, button & weather icon Save in the variables
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Await connection to the API & get a city name from the input field
async function checkWeather(city) {
  // Store the response from the API
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // If the response status = 404 → show error message
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // If not error 404 → save JSON data into variable & log it
    var data = await response.json();
    console.log(data);

    // Insert data into elements in the document (index.html)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Get the weather condition name from the API and change the icon
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    // Show the weather container
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Add click event listener to the search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
