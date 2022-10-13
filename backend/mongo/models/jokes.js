const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokesSchema = new Schema(
  {
    setup: {
      type: String,
      required: true,
      unique: true
    },
    punchline: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Jokes = mongoose.model("Joke", jokesSchema);

module.exports = Jokes;
