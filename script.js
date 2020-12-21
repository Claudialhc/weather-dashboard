$(function () {
  var apiKey = "c3135832d3608376b343e52f39fa89db";

  $(document).on("click", ".city", function () {
    // get the name of the city using the data-city attribute of the clicked
    // element
    var city = $(this).attr("data-city");

    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey;

    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      // log the data from the api to the console
      $("#city-name").text(data.name + " Weather");

      $("#temp").text(data.main.temp + " °");

      $("#wind").text(data.wind.speed + " mph");

      $("#humidity").text(data.main.humidity + " %");
      $("#uvindex").text(data.main.uvIndex + " %");

      //--- right column
      //---- Current Weather Conditions
      //----- City Name
      //----- Current Date
      //----- Current Weather Icon
      //----- Temperature
      //----- humidity
      //----- Wind Speed
      //----- UV Index

      //--- 5-Day Forecast:
      //----- cards for the next 5 days
      //---- Each card:
      //----- date
      //----- weather icon
      //----- temp
      //----- humidity

      //Events:
      //- User clicks on a search history item
      //- User clicks on submit search button
    });
  });
});

$("#search-form").on("submit", function (event) {
    // prevent the default form behavior
    event.preventDefault();
    // store value of form input in a variable named search. remove any leading
    // or trailing white space using the trim method
    var search = $("#search-input").val().trim();
    // do nothing if search has no characters (empty string)
    if (search === "") {
      return;
    }
   
    var queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      search +
      "&units=imperial&appid=" +
      apiKey;
    // send ajax request for current weather to OpenWeatherAPI
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (data) {
      // log the data from the api to the console
      console.log(data);
      // display the city name, temperature, wind, and humidity in the elements
      // found in the html.
      $("#city-name").text(data.name + " Weather");
      $("#temp").text(data.main.temp + "°");
      $("#wind").text(data.wind.speed + "mph");
      $("#humidity").text(data.main.humidity + "%");
      $("#uvIndex").text(data.main.UVindex + "%");
      // Clear the search input
      $("#search-input").val("");
    });
  });
});