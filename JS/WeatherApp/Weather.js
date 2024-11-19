const inputbox = document.querySelector('.input-box')
const searchBtn = document.getElementById("search")
const place = document.querySelector(".city")
const weather_img = document.querySelector(".weather-img")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const max_temp=document.getElementById("max")
const min_temp=document.getElementById("min")

async function checkWeather(city) {

    const key = 'faec450cd10f2dea91009b56e06c118b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const weather_data = await fetch(url)
        .then(res => res.json());

    console.log(weather_data);

    //temperature
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    place.innerHTML = `${weather_data.name}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind.innerHTML = `${weather_data.wind.speed}Km/H`
    max_temp.innerHTML=`Max_temp ${Math.round(weather_data.main.temp_max - 273.15)}°C`
    min_temp.innerHTML=`Min_temp ${Math.round(weather_data.main.temp_min - 273.15)}°C`

    // images:
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = './Image/Clouds.gif';
            break;
        case 'Clear':
            weather_img.src = './Image/Snowfall.gif';
            break;
        case 'Mist':
            weather_img.src = './Image/Mist.gif';
            break;
        case 'Rain':
            weather_img.src = './Image/Rain.gif';
            break;
        case 'Snow':
            weather_img.src = './Image/Snowfall.gif';
            break;
        case 'Thunderstorm':
            weather_img.src = './Image/ThunderStorm.gif';
            break;
        default:
            weather_img.src = './Image/sky.jpg';
            break;
    }
    


}

searchBtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});
