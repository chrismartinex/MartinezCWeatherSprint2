let API_KEY = 'dd39ad3836cd95e0847faf228f7f4b17';
let weatherApi1;
let forecastApi;
let timeDayApi;
let cityNameApi;
let weatherApi2;
let weatherApi3;
let latitude;
let longitude;
let initiallocation;
let mainTemp;
let mainTempMin;



let max = document.getElementById("max")
let min = document.getElementById("min")
let temp = document.getElementById("temp")





let textBox = document.getElementById("cityInput")



let zipButton = document.getElementById("zipButton")
zipButton.addEventListener('click', function(){
    console.log(textBox.value)
    AsyncGetData(textBox.value)
})


let cityInput = document.getElementById("cityInput")
const date = new Date();


let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date


const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    // AsyncGetData3(latitude, longitude)
  };
  const errorCallback = (error) => {
    console.log(error);
    alert("Please click Allow on Geolocation otherwise this app would not work")
  };
  //navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  ///geoLocation

async function AsyncGetData2(latitude, longitude){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dd39ad3836cd95e0847faf228f7f4b17&units=imperial`)
    const data = await promise.json();
    weatherApi3 = data
    // console.log(weatherApi3.name)
    
    initiallocation = weatherApi3.name
    console.log(initiallocation)
}

// AsyncGetData2()

async function AsyncGetData(city){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd39ad3836cd95e0847faf228f7f4b17`)
    const data = await promise.json();
    weatherApi = data
    console.log(weatherApi.main)
    console.log(weatherApi.main.temp_min)
    let lat = weatherApi.coord.lat;
    let lon = weatherApi.coord.lon;
    mainTemp = weatherApi.main.temp_max;
    mainTempMin = weatherApi.main.temp_min;
    mainTempMax = weatherApi.main
    temp.innerText = weatherApi.main.feels_like
    max.innerText = mainTemp
    min.innerText = mainTempMin

    
    
}

//  AsyncGetData()

async function AsyncGetData1(city){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dd39ad3836cd95e0847faf228f7f4b17`)
    const data = await promise.json();
    forecastApi = data
    //console.log(forecastApi)
    console.log(forecastApi.list[0].dt_txt)

    //console.log(`${forecastApi.list[5].dt_txt} = ${forecastApi.list[5].main.temp_min}`)
    
}
// AsyncGetData1()


getWeatherData()
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        let{latitude, longitude } = success.coords;
        AsyncGetData2(latitude, longitude)
        
    })
}

//let Key dd39ad3836cd95e0847faf228f7f4b17


//api.openweathermap.org/data/2.5/forecast?lat=37.9977728&lon=-121.8248704&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial


//fetches
// const KEY = "dd39ad3836cd95e0847faf228f7f4b17";

// fetch('').then(res => res.json()).then(data => {
        //     fetch ()

        //     console.log(data)
        // })