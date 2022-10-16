const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const config = require("../config");
const Jokes = require("../mongo/models/jokes");
const cors = require("./cors");

const jokes = express.Router();
const rand = () => parseInt(Math.random() * 410 + 1);

jokes.use(bodyParser.json());

jokes
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.corsWithOptions, (req, res, next) => {
    Jokes.find({})
      .then(
        (jokes) => {
          let randon = rand();
          console.log(randon);
          res.json(jokes[randon]);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    fetch(config.urlJokes, { method: "Get" })
      .then((res) => res.json())
      .then((json) => {
        Jokes.insertMany(json)
          .then(
            (jokes) => {
              res.json(jokes[rand()]);
            },
            (err) => next(err)
          )
          .catch((err) => next(err));
      });
  })
  .delete(cors.corsWithOptions, (req, res, next) => {
    Jokes.deleteMany({})
      .then(
        (resp) => {
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = jokes;
