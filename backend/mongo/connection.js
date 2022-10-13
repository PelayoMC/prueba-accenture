const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const Jokes = require("./models/jokes");
const uri =
  "mongodb+srv://prueba-acccenture:elchulo14_@cluster0.1jykett.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
console.log(client);

module.exports = {
  client,
};
