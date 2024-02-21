console.log("Hello");

const API_key = "bd00de48673d957e1aaba9f8ebc50396";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara);
}
async function fetchWeatherDetails(){

    try{
        let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

    const data = await response.json();
    console.log("weather data:-> " , data);

  
    renderWeatherInfo(data);

    }
    catch(err){
        //handle the error
    }
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
}

async function getCustomWeatherDetails(){
    try{
        let latitude = 17.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
        let data = await result.json();
        console.log(data);
    }
    catch(err){
        console.log("Error found " , err);
    }
   

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geo Location SUpport");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}