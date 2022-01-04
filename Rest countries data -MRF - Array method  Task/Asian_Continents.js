var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    var Asian_Continents = country_data.filter(function(item,index)
    {
        return item.region  === "Asia"
    }).map(function(item,index)
    {
        return item.name.common;

    })
    console.log(Asian_Continents)    
}