async function getWeather(city) {
    let name = document.getElementById("changeLocation");
   if(city.trim().length===0){
    alert("Please input text.");
   }else{
   name.innerHTML = city.trim(); 
   }
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '36de423dbcmsh22cf2f00ae46582p1ca916jsn6072eaeb499d', // enter your api key here
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);



        const temperature = result.temp;
            let temp = document.getElementById("temp");
            temp.innerHTML = `<p>Temperature: ${temperature} °C</p>`;
        
            const humidity = result.humidity;
            let hum = document.getElementById("hum");
            hum.innerHTML = `<p>Humidity: ${humidity} %</p>`;
        
            const cloud = result.cloud_pct;
            let cloudCover = document.getElementById("cloudCover");
            cloudCover.innerHTML = `<p>Cloud cover: ${cloud} %</p>`;
        
            const windSpeed = result.wind_speed;
            let wind = document.getElementById("wind");
            wind.innerHTML = `<p>Wind Speed: ${windSpeed} km/h</p>`;
            


    } catch (error) {
        console.error(error);
    }
};

getWeather("Delhi");

let btn = document.getElementById("btn");
btn.addEventListener("click",press);
function press(e){
    e.preventDefault()
    let location = document.getElementById("location");
    if(location.value.trim().length===0){
        alert("Please input text.");
        document.getElementById("changeLocation").innerHTML = "Delhi";
    }else{
    getWeather(location.value);
    }
};



























