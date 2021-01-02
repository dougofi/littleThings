var longi = '';
var lati = ''; 

const getLocation =  () => {
     navigator.geolocation.getCurrentPosition(position => {
         longi = position.coords.longitude; 
         lati = position.coords.latitude; 
        assignCity(longi, lati).then(data => document.getElementById("localCity").innerHTML = data.results[0].components.country); 
        getCurrentWeather(longi, lati).then(data => document.getElementById("weather").innerHTML = data.main.temp);
     });    
};


const assignCity = async (longitude, latitude) => {
    const cityResponse = await fetch('https://api.opencagedata.com/geocode/v1/json?q=-22.6792%2C+14.5272&key=7129a0fa283d46b9b2444e155d7f7c0a&pretty=1')
    const data = await cityResponse.json(); 

    return data;

}

const getCurrentWeather = async (longitude, latitude) => {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=38154d37f84abdf259b0d2bbc8c01096&units=metric`); 
    const data =  await weatherResponse.json(); 

    console.log(data.main.temp)

    return data; 
}


const searchBarHandler =  () => {
    let searchInput = ''; 
    searchInput = document.getElementById('searchbar').value; 
    console.log(searchInput);
    fetch('https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters').then(response => {
        console.log(response.json())
    })
} 





getLocation();



