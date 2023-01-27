import { prod, dev } from "./enviroment.js";

let apiKey = '&appid=';

if(prod.isLive == true)
{
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}




///import on top


// let API_KEY = 'dd39ad3836cd95e0847faf228f7f4b17';
let weatherApi1;
let forecastApi;
let timeDayApi;
let cityNameApi;
let weatherApi;
let weatherApi2;
let weatherApi3;
let weatherApi4;
let weatherApi5;
let weatherApi6;


let latitude;
let longitude;
let initiallocation;
let mainTemp;
let mainTempMax;

let mainTempMin;
let currentcityname;
let citynamebtn;


//tuesday
let temp2 = document.getElementById("temp2")
let max2 = document.getElementById("max2")
let min2 = document.getElementById("min2")

//wednesday
let temp3 = document.getElementById("temp3")
let max3 = document.getElementById("max3")
let min3 = document.getElementById("min3")



//thursday
let temp4 = document.getElementById("temp4")
let max4 = document.getElementById("max4")
let min4 = document.getElementById("min4")



//friday
let temp5 = document.getElementById("temp5")
let max5 = document.getElementById("max5")
let min5 = document.getElementById("min5")



//monday
let max = document.getElementById("max")
let min = document.getElementById("min")
let temp = document.getElementById("temp")
let currentcity = document.getElementById("currentcity");








let textBox = document.getElementById("cityInput")



let zipButton = document.getElementById("zipButton")
zipButton.addEventListener('click', function(){
    console.log(textBox.value)
    AsyncGetData(textBox.value)
    AsyncGetData4(textBox.value)
})


let cityInput = document.getElementById("cityInput")
const date = new Date();


let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date

currentcity.innerText = currentcity


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
  //current WEATHER
async function AsyncGetData2(latitude, longitude){
const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial${apiKey}`)
const data = await promise.json();
weatherApi3 = data
// console.log(weatherApi3.name)
    
    initiallocation = weatherApi3.name
    currentcityname = weatherApi3.name
    console.log(initiallocation)

}


///LATITUDE AND LONGGITUDE
async function AsyncGetData3(latitude, longitude){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial${apiKey}`)
    const data = await promise.json();
    weatherApi3 = data
    // console.log(weatherApi3.name)
    
    initiallocation = weatherApi4.name
    currentcityname = weatherApi4.name
    console.log(initiallocation)

}

// AsyncGetData2()
//current city TODAYS WEATHER

async function AsyncGetData(city){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial${apiKey}`)
    const data = await promise.json();
    weatherApi = data
    console.log(weatherApi.main)
    console.log(weatherApi.main.temp_min)
    let lat = weatherApi.coord.lat;
    let lon = weatherApi.coord.lon;
    mainTemp = weatherApi.main.temp_max;
    mainTempMin = weatherApi.main.temp_min;
    mainTempMax = weatherApi.main;
    // temp.innerText = weatherApi.main.feels_like
    // max.innerText = mainTemp
    // min.innerText = mainTempMin
    currentcity.innerText = currentcityname


    
    
}

//  AsyncGetData()
///WEATHER FORECAST

async function AsyncGetData4(city){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial${apiKey}`)
    const data = await promise.json();
    weatherApi5 = data
    console.log(weatherApi5)
    //monday
    temp.innerText = "Temperature " + weatherApi5.list[8].main.feels_like + " " + "°F"
    max.innerText = "Max Temp " + weatherApi5.list[8].main.temp_max + " " + "°F"
    min.innerText = "Min Temp " +  weatherApi5.list[8].main.temp_min + " " + "°F"


    //tuesday 
    temp2.innerText =  "Temperature " + weatherApi5.list[16].main.feels_like + " " + "°F"
    max2.innerText = "Max Temp " + weatherApi5.list[16].main.temp_max + " " + "°F"
    min2.innerText = "Min Temp " + weatherApi5.list[16].main.temp_min  + " " + "°F"
    console.log();

    
    //wednesday
    temp3.innerText = "Temperature " + weatherApi5.list[24].main.feels_like + " " + "°F"
    max3.innerText =  "Max Temp " + weatherApi5.list[24].main.temp_max + " " + "°F"
    min3.innerText = "Min Temp " +  weatherApi5.list[24].main.temp_min + " " + "°F"
    //thursday
    temp4.innerText = "Temperature " + weatherApi5.list[36].main.feels_like + " " + "°F"
    max4.innerText = "Max Temp " + weatherApi5.list[36].main.temp_max + " " + "°F"
    min4.innerText = "Min Temp " + weatherApi5.list[36].main.temp_min + " " + "°F"
    //friday
    temp5.innerText = "Temperature " + weatherApi5.list[0].main.feels_like + " " + "°F"
    max5.innerText = "Max Temp " + weatherApi5.list[0].main.temp_max + " " + "°F"
    min5.innerText = "Min Temp " +  weatherApi5.list[0].main.temp_min + " " + "°F"

    
//getting the city type inn

citynamebtn = weatherApi5.city.name
currentcity.innerText = citynamebtn
console.log(citynamebtn);



    // console.log(weatherApi.main)
    // console.log(weatherApi.main.temp_min)
    // let lat = weatherApi.coord.lat;
    // let lon = weatherApi.coord.lon;
    // mainTemp = weatherApi.main.temp_max;
    // mainTempMin = weatherApi.main.temp_min;
    // mainTempMax = weatherApi.main
    // temp.innerText = weatherApi.main.feels_like
    // max.innerText = mainTemp
    // min.innerText = mainTempMin
    // currentcity.innerText = currentcityname


    
    
}



async function AsyncGetData1(city){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial${apiKey}`)
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










//notes below
//let Key dd39ad3836cd95e0847faf228f7f4b17
//api.openweathermap.org/data/2.5/forecast?lat=37.9977728&lon=-121.8248704&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial
//fetches
// const KEY = "dd39ad3836cd95e0847faf228f7f4b17";
// fetch('').then(res => res.json()).then(data => {
        //     fetch ()

        //     console.log(data)
        // })