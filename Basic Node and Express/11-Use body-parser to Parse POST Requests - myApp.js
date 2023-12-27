let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;

app.get("/json", (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});

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

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.route("/name").get((req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}` });
});
