$(function() {
  
  var city;
  var country;
  
  $.getJSON('http://ip-api.com/json', function(myData) {
    console.log(myData);
    city = myData.city;
    country = myData.country;
    renderHtml(myData); 
    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=2cb5f4eb8c16d4e01df1c2d5139c1306", function(data) {
      var tempC = Math.round(data.main.temp);
      var tempF = Math.round(tempC * (9/5)) + 32;
      var desc = data.weather[0].description;
      var icon = data.weather[0].icon;
      
       $("#temperature").html("<p>"+tempC+" &#176C</p>");
       $("#description").html(desc);
       $("#icon").html("<img src='http://openweathermap.org/img/w/"+icon+".png'>");
      
      var c2F = true;
      $("#btn").click(function() {
        if(c2F === true){
            $("#temperature").html("<p>"+tempF+" &#176F</p>");
            $("#btn").html("&#176 C");
            c2F = false;
          }else{
            $("#temperature").html("<p>"+tempC+" &#176C</p>");
            $("#btn").html("&#176 F");
            c2F = true;
          }
      }); 
      
  });
    
  });
   
  function renderHtml(ourData) {
    $("#location").html("<p>"+city+", "+country+"</p>");
    
  };
  
});