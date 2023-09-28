const apiKey = "d838865293e344018c8904adc0c4964f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "weatherImg/clear-day.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weatherImg/scttererd-cloud.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "weatherImg/shower-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weatherImg/light-rain-day.png";
    } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "weatherImg/haze.png";
    } else if (data.weather[0].main == "Fog") {
        weatherIcon.src = "weatherImg/fog.png";
    } else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "weatherImg/thunderstorm.png";
    }

}

searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        checkWeather(searchBox.value);
        input.blur();
    }
})

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})