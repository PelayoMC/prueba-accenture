import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Api from "./api/api";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const api = new Api();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    console.log(!show);
    setShow(!show);
    if (show) {
      fetchData();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    api
      .getJoke()
      .then((response) => response.data)
      .then((response) => {
        console.log(response);
        if (response) setData(response);
        else
          api
            .loadJokes()
            .then((response) => response.data)
            .then((response) => {
              setShow(!show);
              setData(response);
            })
            .finally(() => setLoading(false))
            .catch((err) => console.log(err));
      })
      .finally(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <button className="App" onClick={handleClick}>
      {!loading ? (
        <Card data={data} show={show}></Card>
      ) : (
        <div className="loader"></div>
      )}
    </button>
  );
}

export default App;
