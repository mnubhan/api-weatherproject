const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Kuala Lumpur&appid=5400310b05081053d9190cc8348b501f&units=metric";
  https.get(url, function (response) {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const place = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      res.write(
        `<h1>Today weather in ${place} is ${description} <img src=${iconUrl}>and it temperature is ${temp}.</h1> `
      );
      res.send();
    });
  });
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
