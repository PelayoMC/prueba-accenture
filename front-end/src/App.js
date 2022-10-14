import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Api from "./api/api";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const api = new Api();

  useEffect(() => {
    api
      .loadJoke()
      .then((response) => console.log(response))
      .then(() => fetchData())
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    setShow(!show);
    if (show) fetchData();
  };

  const fetchData = () => {
    api
      .getJoke()
      .then((response) => console.log(response))
      .then((response) => response.json())
      .then((response) => setData(response.joke))
      .catch((err) => console.log(err));
  };

  // const fetchData = async () => {
  //   await fetch(`http://localhost:3001/jokes`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setData(response.joke);
  //     });
  // };

  return (
    <button className="App" onClick={handleClick}>
      <Card data={data} show={show}></Card>
    </button>
  );
}

export default App;
