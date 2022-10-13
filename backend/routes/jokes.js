const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const config = require("../config");
const cors = require("./cors");

const jokes = express.Router();

jokes.use(bodyParser.json());

jokes
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(cors.corsWithOptions, (req, res, next) => {
    fetch(config.urlJokes, { method: "Get" })
      .then((res) => res.json())
      .then((json) => {
        res.end(
          JSON.stringify({
            joke: json.filter((joke) => joke.id == 2)[0],
          })
        );
        // do something with JSON
        // console.log(json.filter(joke => joke.id == 2));
      });
  });

module.exports = jokes;
