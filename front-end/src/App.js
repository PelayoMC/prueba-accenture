import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    setShow(!show);
    if (show) fetchData();
  };

  const fetchData = async () => {
    await fetch(`http://localhost:3001/jokes`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.joke);
      });
  };

  return (
    <button className="App" onClick={handleClick}>
      <Card data={data} show={show}></Card>
    </button>
  );
}

export default App;
