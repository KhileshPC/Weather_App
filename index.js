// console.log("Hello");

// const API_key = "bd00de48673d957e1aaba9f8ebc50396";

// function renderWeatherInfo(data){
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

//     document.body.appendChild(newPara);
// }
// async function fetchWeatherDetails(){

//     try{
//         let city = "goa";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

//     const data = await response.json();
//     console.log("weather data:-> " , data);

  
//     renderWeatherInfo(data);

//     }
//     catch(err){
//         //handle the error
//     }
//     // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// }

// async function getCustomWeatherDetails(){
//     try{
//         let latitude = 17.6333;
//         let longitude = 18.3333;
    
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
//         let data = await result.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log("Error found " , err);
//     }
   

// }

// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         console.log("No geo Location SUpport");
//     }
// }

// function showPosition(position){
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     console.log(lat);
//     console.log(long);
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAcessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initial variable

let currentTab = userTab;
const API_key = "bd00de48673d957e1aaba9f8ebc50396";
currentTab.classList.add("current-tab");


function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAcessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStorage();
        }
    }
}
userTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input parameter
    switchTab(searchTab);
})


//  check if coordinate are already present in session storage
function getfromSessionStorage(){
    const localcoordinates = sessionStorage.getItem("user-coordinates");
    if(!localcoordinates){
        grantAcessContainer.classList.add("active");

    }
    else{
        const coordinates = JSON.parse(localcoordinates);
        fetchUserWeatherInfo();

    }
}

async function fetchUserWeatherInfo(coordinate){
    const {lat, lon} = coordinate;
    
    //make grantcontainer invisible
    grantAcessContainer.classList.remove("active");

    //make loader visible
    loadingScreen.classList.add("active");

    // API call
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`);
        const data = response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        
    }
    catch(err){

    }
}
