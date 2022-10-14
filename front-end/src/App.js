import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Api from "./api/api";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const api = new Api();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setShow(!show);
    if (show) fetchData();
  };

  const fetchData = () => {
    api
      .getJoke()
      .then((response) => response.data)
      .then((response) => {
        if (response) setData(response);
        else
          api
            .loadJokes()
            .then((response) => response.data)
            .then((response) => {
              setShow(!show);
              setData(response);
            })
            .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // api
    //   .getJoke()
    //   .then((response) => response.data)
    //   .then((response) => setData(response))
    //   .catch((err) => console.log(err));
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
