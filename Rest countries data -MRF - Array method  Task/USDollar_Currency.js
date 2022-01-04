var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    var USDollar_Currency = country_data.filter(function(item,index)
    {
        return item.currencies?item.currencies.hasOwnProperty('USD') === true : false;
    }).map(function(item,index)
    {
        return item.name.common;

    })
    console.log(USDollar_Currency)
}