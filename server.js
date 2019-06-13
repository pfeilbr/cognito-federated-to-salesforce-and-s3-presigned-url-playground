const express = require("express");
var fs = require("fs");
var https = require("https");
const app = express();
const port = 443;

app.use(express.static("."));

//app.get("/", (req, res) => res.send("Hello World!"));

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(port, function() {
    console.log(
      `Example app listening on port ${port}! Go to https://localhost:${port}/`
    );
  });
