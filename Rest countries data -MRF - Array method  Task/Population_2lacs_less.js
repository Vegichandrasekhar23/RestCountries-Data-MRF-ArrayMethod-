var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    var Population_2lacs_less = country_data.filter(function(item,index)
    {
        return item.population  < 200000
    }).map(function(item,index)
    {
        return item.name.common;

    })
    console.log(Population_2lacs_less)    
}