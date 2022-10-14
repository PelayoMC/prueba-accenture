import axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = "http://localhost:3001";
  }
  init = () => {
    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
    });
    return this.client;
  };
  getJoke = () => {
    return this.init().get("/jokes");
  };
  loadJokes = () => {
    return this.init().post("/jokes");
  };
}
