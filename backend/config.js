module.exports = {
  hostname: "localhost",
  port: 3001,
  allowedOrigins: ["http://localhost:3000", "https://localhost:3443"],
  urlJokes:
    "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json",
  mongoUrl: pass => `mongodb+srv://prueba-acccenture:${pass}@cluster0.1jykett.mongodb.net/?retryWrites=true&w=majority`,
};
