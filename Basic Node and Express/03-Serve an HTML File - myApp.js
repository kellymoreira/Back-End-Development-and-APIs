let express = require("express");
let app = express();

// 1) Meet the Node Console.
console.log("Hello World");

/*************************************
// 2) Start a Working Express Server
app.get("/", (req, res) => {
  res.send("Hello Express");
});
*************************************/

// 3) Serve an HTML File
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
