
var countries;
fetch('https://restcountries.com/v3.1/all')
.then(Response => {
    return Response.json()
}).then (function(data) {
    countries = data;
    countries.forEach(obj => { 
        let latval = obj.latlng[0];
        let longval = obj.latlng[1];       
        base_url = 'https://api.openweathermap.org/data/2.5/weather?'
        complete_url = base_url+"lat="+latval+"&lon="+longval+"&units=metric&appid=8103f92a3523e20edce042878c28f22a"
        fetch(complete_url)
        .then(Response => {
            return Response.json()
        }).then (function(data1) {
            let weatherData = data1;
            console.log(`${obj.name.common} : ${weatherData.main.temp} °C`)                       
        })
        .catch((err) => {
            console.log(err);
        });                        
    })
})                
.catch((err) => {
    console.log(err);
});