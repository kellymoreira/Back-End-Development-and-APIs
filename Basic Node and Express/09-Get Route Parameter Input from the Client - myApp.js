let express = require("express");
let app = express();

// 7) Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

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

// 4) Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

/****************************************
// 5) Serve JSON on a Specific Route
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});
****************************************/

// 6) Use the .env File to Configure the App
app.get("/json", (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});

// 7) Implement a Root-Level Request Logger Middleware
/* IMPLEMENT IT BEFORE ALL THE ROUTES */

// 8) Chain Middleware to Create a Time Server
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },

  (req, res) => {
    res.json({ time: req.time });
  },
);

// 9) Get Input from Client - Route Parameters
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

module.exports = app;
