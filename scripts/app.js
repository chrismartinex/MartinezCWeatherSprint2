


//let Key dd39ad3836cd95e0847faf228f7f4b17


//api.openweathermap.org/data/2.5/forecast?lat=37.9977728&lon=-121.8248704&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial


//fetches
// const KEY = "dd39ad3836cd95e0847faf228f7f4b17";


// getWeatherData()
// function getWeatherData(){
//     navigator.geolocation.getCurrentPosition((success) => {
//         let{latitude, longitude } = success.coords;

//         fetch('').then(res => res.json()).then(data => {
//             fetch ()

//             console.log(data)
//         })
//     })
// }


let weatherApi;
let forecastApi;
let timeDayApi;

async function AsyncGetData(){
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=dd39ad3836cd95e0847faf228f7f4b17")
    const data = await promise.json();
    weatherApi = data
    console.log(weatherApi)
    
}

AsyncGetData()

async function AsyncGetData1(){
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Manteca&appid=dd39ad3836cd95e0847faf228f7f4b17")
    const data = await promise.json();
    forecastApi = data
    console.log(forecastApi)
    
}

AsyncGetData1()

