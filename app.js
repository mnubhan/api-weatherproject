const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Kuala Lumpur&appid=5400310b05081053d9190cc8348b501f&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });
  res.send("Server is up and running");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
// write a function plus