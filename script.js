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
      /*this is to get the UV Index */
      var lat = data.coord.lat;
      var lon = data.coord.lon;

      var queryUrl1 =
        "https://api.openweathermap.org/data/2.5/uvi?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey;
      $.ajax({
        url: queryUrl1,
        method: "GET",
      }).then(function (uvData) {
        console.log(uvData);

        $("#uvIndex").text(uvData.value + " ");
      });
    });
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
  });

  /* code below is for the search input*/
  $("#search-form").on("submit", function (event) {
    // prevent the default form behavior
    event.preventDefault();
    // store value of form input in a variable named search. remove any leading
    // or trailing white space using the trim method
    var city = $("#search-input").val().trim();
    // do nothing if search has no characters (empty string)
    if (city === "") {
      return;
    }

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

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var queryUrl1 =
        "https://api.openweathermap.org/data/2.5/uvi?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        apiKey;
      $.ajax({
        url: queryUrl1,
        method: "GET",
      }).then(function (uvData) {
        console.log(uvData);

        $("#uvIndex").text(uvData.value + " ");
      });
    });
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

      $("#temp").text(data.main.temp + " °");

      $("#wind").text(data.wind.speed + " mph");

      $("#humidity").text(data.main.humidity + " %");
      $("#uvindex").text(data.main.coord.lon + " ");
    });
  });
}) 
  $("#search-form").on("click", function () {
  var searchId = $(this).attr("id");
  var id = searchId.replace("search-form", "");
  var task = $("#" + id).val();
  localStorage.setItem(id, task);
});

