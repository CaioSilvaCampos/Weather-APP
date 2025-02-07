const apiKey = "2a7e30d50164920748ce8e297f2fbab0"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.getElementById('searchbox')
const searchBtn = document.getElementById('button')
const weatherIcon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block'
    } else{
        var data = await response.json()

        console.log(data)

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
        
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "assets/clouds.png"
        } else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "assets/clear.png"
        } else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "assets/drizzle.png"
        }else if(data.weather[0].main == 'Snow'){
            weatherIcon.src = "assets/snow.png"
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "assets/mist.png"
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "assets/rain.png"
        }
        weather.style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }
    

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})