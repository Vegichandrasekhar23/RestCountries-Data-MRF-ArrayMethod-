var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload = function(){
    var country_data = JSON.parse(this.response);
    country_data.forEach(function(item){
        console.log(
        `Name: ${item.name.common},
        Capital: ${item.capital},
        Flag_URL: ${item.flags.png}.`);
    });   
}