import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Form from "./components/Form";
import CardList from "./components/CardList";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=898`)
      .then((response) => {
        console.log("~ response", response);
        setItems(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App c-app">
      <header>
        <h1>Pokemon Find</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} />
      <CardList items={items} inputText={inputText} />
    </div>
  );
}

export default App;
