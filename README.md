# weather-dashboard
This is the template for a weather dashboard that displays current weather for multiple cities. This template was created using JavaScirpt, Bootstraps and third-party API, OpenWeather API. OpenWeater API is used to retrive weather data for cities. 

The code below was created using the OpenWeather API key to populate the 5-day forecast for the selected city:

```js
var queryUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      // log the data from the api to the console

      $("#forecast-temp1").text(data.list[0].main.temp + " °");

      $("#forecast-humidity1").text(data.list[0].main.humidity + " %");

      $("#forecast-temp2").text(data.list[8].main.temp + " °");

      $("#forecast-humidity2").text(data.list[8].main.humidity + " %");

      $("#forecast-temp3").text(data.list[16].main.temp + " °");

      $("#forecast-humidity3").text(data.list[16].main.humidity + " %");

      $("#forecast-temp4").text(data.list[24].main.temp + " °");

      $("#forecast-humidity4").text(data.list[24].main.humidity + " %");

      $("#forecast-temp5").text(data.list[32].main.temp + " °");

      $("#forecast-humidity5").text(data.list[32].main.humidity + " %");
    });
```
The app comes in handy for when you are planning to travel to another city and want to know the weather of your destination to be able to pack accordingly.


Deployed URL: https://claudialhc.github.io/weather-dashboard/
