// File: weather.js


    // Function to fetch weather data from an API
async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=982b9c740c3d06ca0e5876d54d4fdab4`);
    const data = await response.json();

    // Check if the 'weather' array exists and has elements
    if (data.weather && data.weather.length > 0) {
        return data.weather[0].description;
    } else {
        throw new Error("Weather data not available");
    }
}

// Get weather for a specific city
getWeather("New York")
    .then(description => console.log("Weather in New York:", description))
    .catch(error => console.error("Error fetching weather:", error.message));
