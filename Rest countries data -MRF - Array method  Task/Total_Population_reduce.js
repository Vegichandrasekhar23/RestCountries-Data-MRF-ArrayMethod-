var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    var Total_population = country_data.reduce(function(result,item)
    {
        return result+item.population
    },0);
    
    console.log("Total_population: ",Total_population);
}